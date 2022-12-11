import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        <span className="badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>{source}</span>
          </div>
          {/* if imageUrl is null then show https... else show imageUrl */}
          <img src={!imageUrl?"https://images.livemint.com/img/2022/11/25/600x338/adani_1669362265293_1669362265481_1669362265481.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-warning">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
