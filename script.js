let breakingImg = document.querySelector('#breakingImg');
let breakingNews = document.querySelector('#breakingNews .title');
let description = document.querySelector('#breakingNews .description');
let topNews= document.querySelector('.topNews');
let sportsNews= document.querySelector('#sportsNews .newsBox');
let businessNews= document.querySelector('#businessNews .newsBox');
let techNews= document.querySelector('#techNews .newsBox');
let indianNews= document.querySelector('#indian_news');


//fetching Data from NewsAPI
// const apiKey = '6a5977ede50840d9901a6648009d9aba'
//2nd key
// const apiKey = 'bd843778a79d4894a308499a234b5ab7'
//3rd key
const apiKey = 'f1a8e632bc374f7d9be2fcf280c83234'

const fetchData = async (country,category,pageSize)=>{

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}


//adding Breaking News
const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
    breakingNews.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
    description.innerHTML = `${data[0].description}`
    
}
fetchData('us','general',5).then(add_breakingNews); //calling fetchdata function with category & pageSize values

//adding Top news
const add_topNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,150) + "..." //if the word is greater than 100, then add print ...
        }

        html += `<div class="news">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    topNews.innerHTML = html
}
fetchData('us','general',20).then(add_topNews)


//add sports news
const add_sportsNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    sportsNews.innerHTML = html
}
fetchData('us','sports',20).then(add_sportsNews)

//add business news
const add_businessNews= (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    businessNews.innerHTML = html
}
fetchData('us','business',20).then(add_businessNews)

//add technology news
const add_techNews= (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    techNews.innerHTML = html
}
fetchData('us','technology',20).then(add_techNews)


//add indian news
const add_indianNews= (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if (element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100) + "..."
        }

        html += `<div class="row">
        <div class="col-4">
            <div class="title">
                <h3><a href=${element.url} target="_blank"><p>${title}</p></a></h3>
            </div>
        </div>
        <div class="col-4">
            <div class="description">
                <p>${element.description}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="img">
            <img src=${element.urlToImage} alt="image">
            </div>
        </div>
    </div>`
    })
    indianNews.innerHTML = html
}
fetchData('in','general',8).then(add_indianNews)

