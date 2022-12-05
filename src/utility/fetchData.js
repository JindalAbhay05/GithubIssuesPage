import {BASE_URL} from '../constants';
import axios from 'axios';
const fetchData=async({page=1, setErr})=>{
    let params = `?page=${page}`
    try{
        const {data} = await axios.get(`${BASE_URL+params}`);
        return {data,page}

    }catch(err){
        setErr(err)
    }
}

export default fetchData;