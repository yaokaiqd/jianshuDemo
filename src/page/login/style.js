  import styled from 'styled-components'
  
  export const LogContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f1f1f1;
    z-index: 999;
  `
  export const LogBox = styled.div`
    position: absolute;
    top: calc(50% - 200px);
    left:calc(50% - 200px);
    width: 400px;
    height: 400px;
    background-color: #fff;
    padding: 55px 50px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
  `
  export const Logo = styled.div`
    width: 97px;
    height: 45px;
    float: left;
    background: url(${props => props.background});
    background-size: contain;
    margin-top: 60px;
    margin-left: 50px;
  `

  export const InputPsw = styled.input.attrs({
    type: 'password',
    placeholder: '请输入密码:'
  })`
    border: none;
    width: 300px;
    height: 50px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 3px 3px;
  `
  export const InputAcc = styled.input.attrs({
    type: 'text',
    placeholder: '请输入账号:'
  })`
    border: none;
    content-box: border-box;
    width: 300px;
    height: 50px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    border: 1px solid #c8c8c8;
    border-bottom: 0;
    border-radius: 3px 3px 0 0 ;
  `
  export const Tittle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #969696;
    vertical-align: middle;
    height: 50px;
    text-align: center;
    margin-bottom: 50px;
    span {
      color: #ea6f5a
    }
  `
  export const LogBtn = styled.button`
    margin-top: 50px;
    width: 300px;
    height: 45px;
    background-color: #3194d0;
    color: #fff;
    border-radius: 25px;
    border: none;
  `
 