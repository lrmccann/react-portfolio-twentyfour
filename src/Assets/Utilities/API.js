// import axios from "axios";

// const allImages = {
//     "globalAssets" : [],
//     "projectAssets": [],
//     "techAssets": []
//   }

// export const getGlobalAssets = async () => {
//     // if(allImages.globalAssets.length !== 0){
//         allImages.globalAssets = [];
//     // }
//     await axios.get('http://10.0.0.70:3000/global-assets/')
//     .then((response) => {
//         console.log(response);
//         if(typeof(response.data === Array)){

//             response.data.map((obj, i) => {
//                 // skip first result as it's just aws main folder url
//                 if(i !== 0){
//                     allImages.globalAssets.push(`${obj.Key}`);
//                 }
//                 return allImages;
//             })
//         }
//         // response.data
//         // for(let i = 1; i < response.data; i++){
//         //     // if(i !== 0){
//         //         console.log(`${response.data[i]}`)
//         //         allImages.globalAssets.push(`${response.data[i]}.Key`);
//         //     // }
//         // }
//     })
// }

// export const getProjectAssets = async () => {
//     await axios.get('http://10.0.0.70:3000/project-assets/')
// }

// export const getTechIcons = async () => {
//     await axios.get('http://10.0.0.70:3000/tech-assets/')
// }

// export default allImages;