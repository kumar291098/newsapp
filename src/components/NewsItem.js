import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://media.cnn.com/api/v1/images/stellar/prod/231027221010-01-robert-card-photo.jpg?c=16x9&q=w_800,c_fill" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description} </p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
