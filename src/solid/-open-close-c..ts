import axios from "axios";


export class HttpClinete{
    async get(url:string){
        const { data } = await axios.get(url);
        return data;
    }
}