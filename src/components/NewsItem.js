import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, ImageUrl, newsUrl}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={ImageUrl?ImageUrl:'https://www.onlinejournal.live/watch/blog/info/english/latest/images/1.png?v=1606212006'} className="card-img-top" style={{heigh:'200px', width:'100%'}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description} </p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
