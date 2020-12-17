import React from "react";
import SideApp from "./sideapp";
// ('http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=277fa25d2d1d4a6e9e1064972881e2ca');

async function getNewsFromAPI() {
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('277fa25d2d1d4a6e9e1064972881e2ca');
  newsapi.v2.topHeadlines({
    sources: 'bbc-news,the-verge',
    q: 'bitcoin',
    category: 'business',
    language: 'en',
    country: 'us'
  }).then(response => {
    alert('response');
    return response;
  });
}

class APINewsWriter extends React.Component {
  render() {
    var api_data = getNewsFromAPI();
    var list = [];
    if (api_data.status !== 'ok') {
      list.push(
        <h1 key={-1}>Read api ERROR!!!</h1>
      )
    }
    for (var i in api_data.articles) {
      list.push(
        <div className="apinews" key={i}>
          <h1>{api_data.articles[i].title}</h1><br />
          <h5>{api_data.articles[i].source.name}</h5><h5>{api_data.articles[i].publishedAt}</h5>
          <h4>{api_data.articles[i].description}</h4>
        </div>
      )
    }
    return (
      <div id="maincon">
        {api_data.status}
        {list}
      </div>
    )
  }
}

class APINews extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideApp />
        <APINewsWriter />
      </React.Fragment>
    )
  }
}

export default APINews;