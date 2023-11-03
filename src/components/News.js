import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

   


    constructor() {
        super();
        

        this.state = {
            articles: [],
            loading: false,
            page:1,
        }


    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=1&pageSize=9";
        let data=await fetch(url);
        let parseData=await data.json()
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
    }   

    
    handleNextClick= async ()=>{
        console.log("Next");
        if(this.state.page+1>Math.ceil(this.state.totalResults/9)){

        }else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=${this.state.page+1}&pageSize=9`;
        let data=await fetch(url);
        let parseData=await data.json()
        
        this.setState({
            page: this.state.page + 1,
            articles:parseData.articles,
        })
        }
    }
    handlePrevClick=   async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=${this.state.page-1}&pageSize=9`;
        let data=await fetch(url);
        let parseData=await data.json()
        
        this.setState({
            page: this.state.page - 1,
            articles:parseData.articles,
        })
        console.log("previous");

    }

    render() {
        return (
            <div className='container my-3'>
                <h2>News top headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        const title = element.title ? element.title.slice(0, 25) : '';
                        const description = element.description ? element.description.slice(0, 100) : '';
                        return <div className="col-md-4"  key={element.url} >
                            <NewsItem title={title} description={description} ImageUrl={element.urlToImage} newsUrl={element.url} />

                        </div>
                       
                    })}


                </div>
                <div className="container d-flex justify-content-between">
                <button type="button"  disabled={this.state.page<=1} className="btn btn-dark"  onClick={this.handlePrevClick}>&larr;Previous</button>
                <button type="button" disabled={this.state.page===Math.ceil(this.state.totalResults/9)} className="btn btn-dark"  onClick={this.handleNextClick}>Next&rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
