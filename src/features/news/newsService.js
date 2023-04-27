import axios from "axios"
import { REACT_APP_API_KEY } from "@env"

//const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${REACT_APP_API_KEY}&pageSize=20`
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${REACT_APP_API_KEY}&pageSize=100&page=1`

//GET ALL NEWS
const getNews = async() => {

/*     const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } */

    //const {data} = await axios.get(API_URL + `&page=${page}`)
    const {data} = await axios.get(API_URL)
    let articles = data.articles
    return articles
}

const newsService = {
    getNews
}

export default newsService
