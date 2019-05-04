import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import logoImg from '../../statics/loginLogo.png'
import {
  LogContainer,
  LogBox,
  Logo,
  InputPsw,
  InputAcc,
  Tittle,
  LogBtn,
} from './style'

class Login extends Component {
  render() {
    if(this.props.loginStatus) {
      return <Redirect to='/'></Redirect>
    } else {
      return (
        <LogContainer>
          <Logo background={logoImg}></Logo>
          <LogBox>
            <Tittle><span>一键登陆</span>   ·   注册</Tittle>
            <InputAcc></InputAcc>
            <InputPsw></InputPsw>
            <LogBtn onClick={this.props.login}>登录</LogBtn>
          </LogBox>
        </LogContainer>
      )
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login','loginStatus']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    login() {
      dispatch(actionCreators.changeLog())
    }
  }
}

export default connect(mapState,mapDispatch)(Login)
