import React from "react";
import axios from "axios";

class APINewsWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      apinews_data: [],
      loaded: false,
      url: 'https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=277fa25d2d1d4a6e9e1064972881e2ca'
    }
  }
  componentDidMount() {
    axios.get(this.state.url).then((res)=>{
      this.setState({
        apinews_data: res.data.articles.map(item => ({
          title: item.title,
          author: item.source.name,
          time: item.publishedAt,
          description: item.description,
          url: item.url,
          urlimg: item.urlToImage
        })),
        loaded: true,
      })
    })
  }

  render() {
    return (
      <div id="maincon">
        <h1>金融経済最新情報一覧</h1>
        {
          this.state.apinews_data.map(item => {
            return (
              <div className="apinews" key={item.title}>
                <div className="newsimgdiv">
                  <img className="newsimg" src={item.urlimg} alt=""></img>
                </div>
                <div className="newstextdiv">
                  <h1><a href={item.url}>{item.title}</a></h1>
                  <h5>{item.author} &nbsp;&nbsp;&nbsp;&nbsp; {item.time}</h5>
                  <h4>{item.description}</h4>
                </div>
              </div>
            )
          })
        }
        <div>
        <a href="/serakubank.build.io">ホームページに戻る</a>
        </div>
      </div>
    )
  }
}

class APINews extends React.Component {
  render() {
    return (
      <APINewsWriter />
    )
  }
}

export default APINews;