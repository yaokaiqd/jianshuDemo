import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {withRouter} from 'react-router'
import {
  Container,
  Title,
  IntroduceBox,
  IntroduceImg,
  IntroduceContent,
  IntroduceMsg,
  Artist,
  Comments,
  Trailer,
  LoadContainer,
  LoadBox,
} from './style'


class Detail extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }
  componentWillUnmount() {
    this.props.resetMovie()
  }
  artListItem(data) {
    return data.map(it => (
      <li key={it.id ? it.id : it.name}>
        <img src={it.avatars ? it.avatars.small : null} alt="" width="95" height="135"/>
        <span>{it.name}</span>
      </li>
    ))
  }
  hotComments(data) {
    return data.map(it => (
      <li key={it.id}>
        <p><span>{it.author.name}</span>{it.created_at}</p>
        <section>{it.content}</section>
      </li>
    ))
  }
  
  contentRender() {
    const {movieMsg} = this.props
    if(movieMsg) {
      return (
        <Fragment>
          <Title>{movieMsg.title}  <span>({movieMsg.year})</span></Title>
          <IntroduceBox>
            <IntroduceImg>
              <img src={movieMsg.images.medium} alt=""/>
            </IntroduceImg>
            <IntroduceMsg>
              <h2>{movieMsg.title}的影片信息· · · · · ·</h2>
              <p><span>导演：</span><a href="javascript:;">{movieMsg.directors.map(it => it.name).join('/')}</a></p>
              <p><span>编剧：</span><a href="javascript:;">{movieMsg.writers.map(it => it.name).join('/')}</a></p>
              <p><span>主演：</span><a href="javascript:;">{movieMsg.casts.map(it => it.name).join('/')}</a></p>
              <p><span>类型：</span>{movieMsg.genres.join('/')}</p>
              <p><span>制片国家/地区：</span>{movieMsg.countries.join('/')}</p>
              <p><span>语言：</span>{movieMsg.languages.join('/')}</p>
              <p><span>上映日期：</span>{movieMsg.pubdates.join('/')}</p>
              <p><span>片长：</span>{movieMsg.durations.join('/')}</p>
              <p><span>又名：</span>{movieMsg.aka.join('/')}</p>
              <p><span>豆瓣评分：</span>{movieMsg.rating.average}({movieMsg.ratings_count}人评分)</p>
            </IntroduceMsg>
          </IntroduceBox>
          <IntroduceContent>
            <h2>{movieMsg.title}的简介· · · · · ·</h2>
            <p>{movieMsg.summary}</p>
          </IntroduceContent>
          <Artist>
            <h2>{movieMsg.title}的演职员· · · · · ·</h2>
            <ul>
              {this.artListItem(movieMsg.directors)}
              {this.artListItem(movieMsg.casts)}
            </ul>
          </Artist>
          <Trailer>
            <h2>{movieMsg.title}的预告片· · · · · ·</h2>
            <video src={movieMsg.trailer_urls[0]} controls width="640" height="360"></video>
          </Trailer>
          <Comments>
            <h2>{movieMsg.title}的热门短评· · · · · ·</h2>
            <div style={{borderTop: '1px solid #ddd'}}></div>
            {this.hotComments(movieMsg.popular_comments)}
          </Comments>
        </Fragment>
      )
    } else {
      return (
        <LoadContainer>
          <LoadBox>
            <i className="iconfont">&#xe607;</i>
          </LoadBox>
        </LoadContainer>
      )
    }
  }
  render() {
    return (
      <Container>
        {this.contentRender()}
      </Container>
    )
  }
}
const mapState = (state) => {
  return {
    movieMsg: state.getIn(['detail','movieMsg'])
  }
} 
const mapDispatch = (dispatch) => {
  return {
    getMovie(data) {
      dispatch(actionCreators.getMovieItem(data))
    },
    resetMovie() {
      dispatch(actionCreators.resetMovie())
    }
  }
}
export default connect(mapState,mapDispatch)(withRouter(Detail))


// componentWillReceiveProps(nextProps) {
//   console.log(nextProps)
//   console.log(this.props)
//   if (this.props.match.params.id !== nextProps.match.params.id) {
//     console.log('componentWillReceiveProps render')
//     this.props.getMovie(nextProps.match.params.id)
//   }
// }