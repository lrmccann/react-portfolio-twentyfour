// import {S3} from '@aws-sdk/client-s3';
import { S3Client, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
// import AWS from 'aws-sdk';
import {awsCredentials} from './aws-config.js';
import fs from 'fs';


const globalAssetsArr = [];
const projectAssetsArr = [];
const techAssetsArr = [];





const connect = async (prefix) => {

        const client = new S3Client({
            accessKeyId: `${awsCredentials.credentials.accessKeyId}`,
            secretAccessKey: `${awsCredentials.credentials.secretAccessKey}`,
            region: 'us-east-1'
        });

            let params = {
                Bucket: `${awsCredentials.bucketName}`,
                Prefix: prefix
                // Key: "global-assets/"
            }
    
            const command = new ListObjectsV2Command(params);
            const response = await client.send(command);
            if(response.Contents){
                return response.Contents;
            }
}

export {
    connect,
    globalAssetsArr,
    projectAssetsArr,
    techAssetsArr
}







// const s3 = new S3();

// const getObject = async (bucketName, key) => {
//     try {
//       const params = {
//         Bucket: bucketName,
//         Key: key
//       };
  
//       const data = await S3. s3.getObject(params).promise();
  
//       // Parse the JSON data
//       const jsonData = JSON.parse(data.Body.toString());
  
//       return jsonData;
//     } catch (err) {
//       console.error('Error getting JSON:', err);
//       throw err;
//     }
//   }

// export default getObject;