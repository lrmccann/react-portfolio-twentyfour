import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { readFile } from "node:fs/promises";
import {
  PutObjectCommand,
  S3Client,
  S3ServiceException,
} from "@aws-sdk/client-s3";
import {awsCredentials} from './aws-utils/aws-config.js';
const app = express();
const PORT = process.env.PORT || 3000;
// can remove puppeteer package since we are not taking snapshot of url

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:3006", "http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

function generateRandomSequence(length) {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = crypto.randomBytes(4).readUInt32LE() / 0xFFFFFFFF; 
    sequence.push(randomNumber);
  }
  return sequence;
}

// async function takeSnapshot(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     // Optionally wait for elements to load
//     // await page.waitForSelector('#some-element');
//     const html = await page.content();
//     await browser.close();
//     return html;
//   }

//   takeSnapshot('https://careers.southwestair.com/flight-attendants')
//   .then(html => {
//     console.log(`HTML CAP : ${html}`);
//     console.log('JSON HTML' , res.json(html));
//   console.log('TYPE : ' , typeof(html))
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

const main = async ( thePath ,fileName ) => {
  console.log(fileName, "file name???")

  const client = new S3Client({
      accessKeyId: `${awsCredentials.credentials.accessKeyId}`,
      secretAccessKey: `${awsCredentials.credentials.secretAccessKey}`,
      region: 'us-east-1'
  });
  const filePath = new URL(`${thePath}`, import.meta.url);
const command = new PutObjectCommand({
  Bucket: `${awsCredentials.bucketName}`,
  Key: `contact-submissions/${fileName}`,
  Body: await readFile(filePath, {encoding: 'utf-8'})
});

try {
  const response = await client.send(command);
  console.log(response, "res in server.js")
} catch (caught) {
  if (
    caught instanceof S3ServiceException &&
    caught.name === "EntityTooLarge"
  ) {
    console.error(
      `Error from S3 while uploading object to ${awsCredentials.bucketName}. \
The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) \
or the multipart upload API (5TB max).`,
    );
  } else if (caught instanceof S3ServiceException) {
    console.error(
      `Error from S3 while uploading object to ${awsCredentials.bucketName}.  ${caught.name}: ${caught.message}`,
    );
  } else {
    throw caught;
  }
}
};

  app.post('/contact-submissions/', async (req, res) => {
    const content = req.body;
    const sequence = generateRandomSequence(1);
    fs.writeFile(`./aws-utils/${sequence}.txt`, JSON.stringify(content), async (err) => {
      if(err){
        console.error("didnt work", err);
      }else {
        await main(`./aws-utils/${sequence}.txt`, `${sequence}.txt`)
        .then(() => {
        fs.unlink(`./aws-utils/${sequence}.txt`, (err) => {
          if (err) {
              throw err;
          }

    console.log("Delete File successfully.");
});
        })
        // res.send("created sucessfully");
        // console.log("yyeeerrrppp")
      }
    })
  })


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

