import axios from "axios"
import { REACT_APP_API_KEY } from "@env"

const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${REACT_APP_API_KEY}&pageSize=10&page=1`

//GET ALL NEWS
const getNews = async() => {

/*     const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } */

    const {data} = await axios.get(API_URL)
    console.log(data.articles)
    return data.articles
}

const newsService = {
    getNews
}

export default newsService
