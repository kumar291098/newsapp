import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, ImageUrl, newsUrl, author, date , source} = this.props;
        return (

            <div>
                <div className="card  d-flex align-items-center justify-content-center" >
                    <img src={ImageUrl ? ImageUrl : 'https://fastly.picsum.photos/id/79/536/354.jpg?hmac=w2BdcAY3IFslYOwmDnjmv_lDT04jyqX4WDkNiCD7Ii8'} className="card-img-top" style={{ heigh: '200px', width: '100%' }} alt="..." />
                    <div className="card-body">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  style={{left:'90%' ,zIndex:'1'}}>
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        <h5 className="card-title">{title} <span class="badge rounded-pill bg-success">Success</span></h5>

                        <p className="card-text">{description}  </p>
                        <p class="card-text"><small class="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
