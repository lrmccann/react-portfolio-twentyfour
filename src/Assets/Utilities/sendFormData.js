import axios from "axios";


const sendFormData = async (formDataObj) => {

    console.log(typeof(formDataObj));
    await axios.post('http://10.0.0.70:3000/contact-submissions/', formDataObj)
    .then((data) => {
        // console.log("")
        if(data.status === 200 || data.status === 202){
            console.log("axios post successful");
        }else{
            console.log("axios post failed");
        }
    })

}

export default sendFormData;