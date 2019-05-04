import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionType from './store/constants'
import * as actionCreators from './store/actionCreators'
import {Link} from 'react-router-dom'
import listImg1 from '../../statics/ranklist/1.png'
import listImg2 from '../../statics/ranklist/2.png'
import listImg3 from '../../statics/ranklist/3.png'
import listImg4 from '../../statics/ranklist/4.png'
import listImg5 from '../../statics/ranklist/5.png'
import listImg6 from '../../statics/ranklist/6.png'
import carouselImg from '../../statics/carousel.png'
import ad from '../../statics/ad.jpg'
import qrcode from '../../statics/qrcode.png'
import {
  Container,
  Carousel,
  ContentList,
  ContentWait,
  ContentItem,
  MoreContentButton,
  RankList,
  RankItem,
  AdBox,
  QrCode,
  QrItem,
  ArtisitList,
  GotoTop,
} from './style'

class Home extends Component {
  ContentRender() {
    const list = this.props.contentList.toJS()
    console.log(list)
    if(list.length) {
      return list.map(it => {
        return (
          <ContentItem key={it.id}>
            <section>
              <div><Link to={'/detail/' + it.id}>{it.title}</Link></div>
              <article><span>豆瓣评分：</span>{it.rating.average}</article>
              <article><span>年份：</span>{it.year}</article>
              <article><span>类型：</span>{it.genres}</article>
              <article><span>导演：</span>{it.directors[0].name}</article>
              <article><span>主演：</span>{it.casts[0].name}</article>
            </section>
            <aside><Link to={'/detail/' + it.id}><img src={it.images.small} alt="" width={'150'} height={'160'} /></Link></aside> 
          </ContentItem>
      )})
    } else {
      return null
    }
  }
  componentDidMount() {
    this.props.getContent()
    window.addEventListener('scroll', this.props.changeGotoTopStatus)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeGotoTopStatus)
  }
  gotoTop() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <Container>
        <div className={'left'}>
          <Carousel background={carouselImg}>
            
          </Carousel>
          <div style={{borderTop:'1px solid #f0f0f0'}}></div>  
          <ContentList>
            {this.ContentRender()}
            {this.props.contentWaitingStatus && <ContentWait><i className='iconfont'>&#xe607;</i></ContentWait>}
          </ContentList>
          <MoreContentButton onClick={() => this.props.getMoreContent(this.props.contentLength)}>加载更多</MoreContentButton>
        </div>
        <div className={'right'}>
          <RankList>
            <RankItem background={listImg1}><span>即将上映 ></span></RankItem>
            <RankItem background={listImg2}><span>新片榜 ></span></RankItem>
            <RankItem background={listImg3}><span>好评榜 ></span></RankItem>
            <RankItem background={listImg4}><span>7日热门 ></span></RankItem>
            <RankItem background={listImg5}><span>30日热门 ></span></RankItem>
            <RankItem background={listImg6}><span>热搜榜 ></span></RankItem>
          </RankList>  
          <QrCode background={qrcode}>
            <div className={'qrSmall'}></div>
            <h4>下载简书手机APP</h4>
            <p>随时随地发现和创作内容</p>
            <QrItem background={qrcode} className={'qrBig'}><section></section></QrItem>
          </QrCode>
          <AdBox background={ad}></AdBox>
        {/*
          <ArtisitList></ArtisitList>*/}
        </div>
        {this.props.gotoTopStatus && <GotoTop onClick={this.gotoTop}>Top</GotoTop>}
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contentList: state.get('home').get('contentList'),
    contentLength: state.getIn(['home','contentLength']),
    contentWaitingStatus: state.getIn(['home','contentWaitingStatus']),
    gotoTopStatus: state.getIn(['home','gotoTopStatus']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getContent() {
      dispatch(actionCreators.getContent())
    },
    getMoreContent(start) {
      dispatch(actionCreators.showContentWaiting())
      dispatch(actionCreators.getMoreContent(start))
    },
    changeGotoTopStatus() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.showGotoTop())
      } else {
        dispatch(actionCreators.hiddenGotoTop())
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)