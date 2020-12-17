import React from "react";
import axios from "axios";
import SideApp from "./sideapp";

class APINewsWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loaded: false,
    }
    this.url='https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=277fa25d2d1d4a6e9e1064972881e2ca';
    this.apinews_data = [];
  }
  componentDidMount() {
    axios.get(this.url).then((res)=>{
      for (var i in res.data.articles) {
        var temp = {};
        temp["title"] = res.data.articles[i].title;
        temp["author"] = res.data.articles[i].source.name;
        temp["time"] = res.data.articles[i].publishedAt;
        temp["description"] = res.data.articles[i].description;
        temp["url"] = res.data.articles[i].url;
        temp["urlimg"] = res.data.articles[i].urlToImage;
        this.apinews_data.push(temp);
      }
      this.setState({
        loaded: true,
      })
    })
  }

  render() {
    return (
      <div id="maincon">
        {
          this.apinews_data.map(item => {
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