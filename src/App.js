import React,{Component} from 'react'
import Header from './common/Header'
import {GlobalStyle} from './style'
import {GlobalStyle2} from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <GlobalStyle2></GlobalStyle2>
        <Header></Header>
      </div>
    )
  }
}

export default App