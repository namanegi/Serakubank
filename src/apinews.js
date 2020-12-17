import React from "react";
import axios from "axios";
import SideApp from "./sideapp";
const url='http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=277fa25d2d1d4a6e9e1064972881e2ca';
var apinews_data = [];
var load_comp = false;
var n=0;

function getNewsFromAPI() {
  axios.get(url).then((res)=>{
    for (var i in res.data.articles) {
      var temp = {};
      temp["title"] = res.data.articles[i].title;
      temp["author"] = res.data.articles[i].source.name;
      temp["time"] = res.data.articles[i].publishedAt;
      temp["description"] = res.data.articles[i].description;
      temp["url"] = res.data.articles[i].url;
      temp["urlimg"] = res.data.articles[i].urlToImage;
      apinews_data.push(temp);
    }
    load_comp = true;
  })
}

class APINewsWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loaded: false,
    }
  }
  componentDidMount() {
    getNewsFromAPI();
    this.intervalId = setInterval(() => {
      if (load_comp || n > 10) {
        this.setState({
          loaded: true,
        });
        clearInterval(this.intervalId);
        console.log('timer working')
      }
      n++;
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div id="maincon">
        {
          apinews_data.map(item => {
            return (
              <div className="apinews" key={item.title}>
              <h1><a href={item.url}>{item.title}</a></h1>
              <h5>{item.author} &nbsp;&nbsp;&nbsp;&nbsp; {item.time}</h5>
              <img className="newsimg" src={item.urlimg} alt=""></img>
              <h4>{item.description}</h4>
            </div>
            )
          })
        }
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