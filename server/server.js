import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import {
  connect,
  globalAssetsArr,
  projectAssetsArr,
  techAssetsArr,
} from "./aws-utils/aws-init.js";
import { awsCredentials } from "./aws-utils/aws-config.js";
// const express = require('express');
const app = express();
// const cors = require("cors")
const PORT = process.env.PORT || 3000;
// const path = require('path');
// const fs = require("fs");
// can remove puppeteer package since we are not taking snapshot of url
// const getObject = require('./aws-utils/aws-init');
// const awsCredentials = require("./aws-utils/aws-config");

app.use(cors());

const corsOptions = {
  origin: ["http://localhost:3006", "http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

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

app.get("/global-assets/", async (req, res) => {
  console.log(req, "initial request");
  try {
    await connect("global-assets").then((data) => {
      res.send(data);
    });
  } catch (err) {
    console.error("current error : ", err);
  }
});

app.get("/project-assets/", async (req, res) => {
    console.log(req, "initial request");
    try {
      await connect("global-images").then((data) => {
        res.send(data);
      });
    } catch (err) {
      console.error("current error : ", err);
    }
  });

  app.get("/tech-assets/", async (req, res) => {
    console.log(req, "initial request");
    try {
      await connect("tech-icons").then((data) => {
        res.send(data);
      });
    } catch (err) {
      console.error("current error : ", err);
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
