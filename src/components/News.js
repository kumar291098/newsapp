import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static PropsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    captlizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);


        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0,
        }
        document.title = `${this.captlizeFirst(this.props.category)} -News`;

    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=8a61e61cbc0b49cc9615eb6a602156a2`;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parseData=await data.json()
        // this.setState({
        //     articles:parseData.articles,
        //     totalResults:parseData.totalResults,
        //     loading:false
        // })
        this.updateNews();
    }

    handleNextClick = async () => {
        // console.log("Next");
        // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){


        //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true})
        //     let data=await fetch(url);
        //     let parseData=await data.json()

        //     this.setState({
        //         loading:false,
        //         page: this.state.page + 1,
        //         articles:parseData.articles,
        //     })
        //     }

        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }
    handlePrevClick = async () => {

        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parseData=await data.json()

        // this.setState({
        //     loading:false,
        //     page: this.state.page - 1,
        //     articles:parseData.articles,
        // })
        console.log("previous");
        this.setState({ page: this.state.page - 1 })
        this.updateNews()

    }



    fetchMoreData = async() => {
       
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8a61e61cbc0b49cc9615eb6a602156a2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles:this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            
        })

      };

    render() {
        return (
            <>
                <h2 style={{ textAlign: "center" }}>News top headlines from {this.captlizeFirst(this.props.category)}  Category</h2>
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length <= this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            const title = element.title ? element.title.slice(0, 25) : '';
                            const description = element.description ? element.description.slice(0, 100) : '';
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={title} description={description} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>

                        })}


                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button type="button" disabled={this.state.page === Math.ceil(this.state.totalResults / 9)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div> */}

            </>
        )
    }
}

export default News
