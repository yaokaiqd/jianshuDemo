import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import * as loginCreators from '../../page/login/store/actionCreators'
import {Link,withRouter} from 'react-router-dom'
import {
  Logo,
  HeaderWrapper,
  Nav,
  NavItem,
  Search,
  HeaderButton,
  SearchWrapper,
  SearchInfo,
  SearchItem,
  historyItem,
} from './style'

class Header extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.searchMovieItem) {
      nextProps.history.push('/detail/' + nextProps.searchMovieItem + '?&apikey=0b2bdeda43b5688921839c8ecb20399b')
      nextProps.resetSearch()
    }
  }
  delStorage(it) {
    const tempStorage = localStorage.getItem('history').split(',')
    const index = tempStorage.findIndex(item => item === it)
    tempStorage.splice(index,1)
    localStorage.setItem('history',tempStorage.join(','))
  }
  searchInfoStatus(page,totalPage) {
    const searchList = this.props.HotSearchList.toJS()
    const itemList = []
    let historyList = []
    const searchHistory = localStorage.getItem('history')
    if(searchHistory) {
      const temp = searchHistory.split(',')
      temp.pop()
      historyList = temp.map(it => {
        return (
          <li key={it} onClick={() => this.props.historySearch(it)}>{it}<span onMouseDown={(it) => this.delStorage(it)}>删除</span></li>
        )
      })
    }
    if(searchList.length) {
      for(let i = (page - 1) * 10;i < page * 10;i++) {
        itemList.push(<Link to={'/detail/' + searchList[i].id} key={searchList[i].id}><SearchItem>{searchList[i].title}</SearchItem></Link>)
      }
    }
    if(this.props.SearchActive || this.props.showSearchInfo) {
      return (
        <SearchInfo onMouseEnter={this.props.mouseIn} onMouseLeave={this.props.mouseOut}>
          <div style={{overflow: 'hidden',marginBottom: '20px'}}>
            <span style={{float: 'left'}}>热门搜索</span>
            <span style={{float: 'right'}} onClick={() => this.props.changePage(this.props.page,this.props.totalPage)}><a href='javascript:;'>换一批</a></span>
            <i className={"iconfont"}>&#xe60f;</i>
          </div>
          <ul>
            {itemList}
          </ul>
          <ul>
            {historyList}
          </ul>
        </SearchInfo>
      )
    }
    return null
  }
  render() {
    return (
      <div style={{borderBottom:'1px solid #f0f0f0'}}>
        <HeaderWrapper>
          <div style={{flex:'1'}}>
            <Link to='/'><Logo></Logo></Link>   
          </div>
          <Nav>
            <NavItem className={'active'}>
              <Link to='/'>
                <i className="iconfont">&#xe609;</i> 首页
              </Link>
            </NavItem>
            <NavItem className={'download'} href={'/download'}>
            <i className="iconfont">&#xe67e;</i> 下载App
            </NavItem>
            <div style={{flex:'1',lineHeight: '58px',paddingLeft: '25px'}}>
              <SearchWrapper>
                <CSSTransition
                  in={this.props.SearchActive}
                  timeout={300}
                  classNames="SearchSlide"
                >
                  <Search 
                    onFocus={this.props.focusHandle.bind(this)} 
                    onBlur={this.props.blurHandle} 
                    className={this.props.SearchActive ? 'focused' : ''}
                    onKeyUp={this.props.searchMovie.bind(this)}
                    ref={e => this.input = e}
                  >
                  </Search>
                </CSSTransition>
                <i className={this.props.SearchActive ? 'iconfont focused search' : 'iconfont search'} onMouseDown={this.props.search.bind(this)}>&#xe623;</i>
                {this.searchInfoStatus(this.props.page,this.props.totalPage)}
              </SearchWrapper>
            </div>
            <NavItem className={'right'}>Aa</NavItem>
            {this.props.loginStatus ? 
              <NavItem className={'right'} onClick={this.props.logout}>
                登出 
              </NavItem> :
              <NavItem className={'right'}>
                <Link to='/login'>登录</Link>
              </NavItem>}
          </Nav>
          <HeaderButton>注册</HeaderButton>
          <HeaderButton className={'write'}>
            <i className={'iconfont'}>&#xe624;</i> 写文章
          </HeaderButton>
        </HeaderWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    SearchActive: state.get('header').get('SearchActive'),
    showSearchInfo: state.get('header').get('showSearchInfo'),
    HotSearchList: state.get('header').get('HotSearchList'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    loginStatus: state.get('login').get('loginStatus'),
    searchMovieItem: state.getIn(['header','searchMovie'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetSearch() {
      dispatch(actionCreators.resetSearch())
    },
    historySearch(item) {
      dispatch(actionCreators.searchMovie(item))
    },
    searchMovie(e) {
      if(e.keyCode === 13 && e.target.value) {
        if (!localStorage.getItem('history')) {
          localStorage.setItem('history', e.target.value + ',')
        }
        if (!localStorage.getItem('history').includes(e.target.value)) {
          if(localStorage.getItem('history').split(',').length < 6) {
            localStorage.setItem('history', localStorage.getItem('history') + e.target.value + ',')
          } else {
            const storage = localStorage.getItem('history').split(',')
            storage.pop()
            storage.shift()
            localStorage.setItem('history', storage.join(',') + ',' + e.target.value + ',')
          }
        }
        dispatch(actionCreators.searchMovie(e.target.value))
      }
    },
    search() {
      if(this.input.value) {
        if (!localStorage.getItem('history')) {
          localStorage.setItem('history', this.input.value + ',')
        }
        if (!localStorage.getItem('history').includes(this.input.value)) {
          if(localStorage.getItem('history').split(',').length < 6) {
            localStorage.setItem('history', localStorage.getItem('history') + this.input.value + ',')
          } else {
            const storage = localStorage.getItem('history').split(',')
            storage.pop()
            storage.shift()
            localStorage.setItem('history', storage.join(',') + ',' + this.input.value + ',')
          }
        }
        dispatch(actionCreators.searchMovie(this.input.value))
      }
    },
    resetSearch() {
      dispatch(actionCreators.resetSearch())
    },
    focusHandle() {
      if(!this.props.HotSearchList.size) {
        dispatch(actionCreators.getHotSearch())
      }
      dispatch(actionCreators.focusHandle())
    },
    blurHandle() {
      dispatch(actionCreators.blurHandle())
    },
    mouseIn() {
      dispatch(actionCreators.mouseIn())
    },
    mouseOut() {
      dispatch(actionCreators.mouseOut())
    },
    changePage(page,totalPage) {
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginCreators.changeLogStatus())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))