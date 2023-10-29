import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

   


    constructor() {
        super();
        

        this.state = {
            articles: [],
            loading: false
        }


    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8a61e61cbc0b49cc9615eb6a602156a2";
        let data=await fetch(url);
        let parseData=await data.json()
        this.setState({articles:parseData.articles})
    }   

    render() {
        return (
            <div className='container my-3'>
                <h2>New top headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        const title = element.title ? element.title.slice(0, 25) : '';
                        const description = element.description ? element.description.slice(0, 100) : '';
                        return <div className="col-md-4"  key={element.url} >
                            <NewsItem title={title} description={description} ImageUrl={element.urlToImage} newsUrl={element.url} />

                        </div>
                       
                    })}


                </div>


            </div>
        )
    }
}

export default News
