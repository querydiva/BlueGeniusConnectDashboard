import axios from "axios";

const baseUrl = "http://localhost:5000/api/asset-status";

const GetAssetStatus = async () => {
    let data;
    await axios.get(baseUrl).then( (resp) =>{
        data = resp;
        // console.log(resp.data);
    }).catch(e => {
        console.log(`Error while fetching : ${e}`);
        data = "Error Fetching Data";
    })

    return data;
}

export default GetAssetStatus;