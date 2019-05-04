import styled from 'styled-components'
import  logo from '../../statics/logo.png'

export const Logo = styled.div`
  width:100px;
  height:56px;
  background: url(${logo});
  background-size: contain;
`

export const HeaderWrapper = styled.div`
  display: flex;
  height: 58px;
  margin: 0 auto;
  max-width: 1400px;
  justify-content: space-between;
`
export const Nav = styled.div`
  display:flex;
  flex:5;
  min-width:730px;
`
export const NavItem = styled.div`
  text-align: center;
  width: 100px;
  line-height: 58px;
  font-size: 17px;
  color:#000;
  cursor: pointer;
  a {
    text-decoration: none;
    color:#000;
  }
  &.download {
    &:hover {
      background-color: #f5f5f5;
    }
  }
  &.active a{
    color: #ea6f5a;
  }
  &.right {
    text-align: right;
    font-size: 15px;
    width:60px;
    a {
      color: #969696;
    }
  }
`
export const HeaderButton = styled.button`
  border-radius: 19px;
  font-size: 15px;
  width:80px;
  height:38px;
  margin: 10px 0;
  margin-left:25px;
  flex-shrink: 0;
  border: 1px solid rgba(236,97,73,.7);
  color: #ea6f5a;
  background-color: #fff;
  &:hover {
    background-color: rgba(236,97,73,.05);
    color: #ec6149;
    border-color: #ec6149;
  }
  &.write {
    width: 100px;
    margin-right:15px;
    color: #fff;
    border: none;
    background-color: #ea6f5a;
    &:hover {
      background-color: #ec6149;
    }
  }
`
export const Search = styled.input.attrs({
  placeholder: '搜索',
})`
  border-radius: 19px;
  padding: 0 35px 0 20px;
  color: #777;
  width: 240px;
  height: 38px;
  border: none;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #eee;
  &::placeholder {
    color: #999; 
  }
  &.focused {
    width: 320px;
  }
  &.SearchSlide-enter {
    width: 240px;
  }
  &.SearchSlide-enter-active {
    width: 320px;
    transition: all .3s ease-out
  }
  &.SearchSlide-exit {
    width: 320px;
  }
  &.SearchSlide-exit-active {
    width: 240px;
    transition: all .3s ease-out
  }
`
export const SearchWrapper = styled.div`
  position : relative;
  display: inline-block;

  .iconfont.search {
    position: absolute;
    width: 30px;
    line-height: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    top: 15px;
    right: 5px;
    &.focused {
      background-color: #969696;
      color: #fff;
    }
    cursor: pointer;
  }
`
export const SearchInfo = styled.div`
  z-index: 2;
  background-color: #fff;
  position: absolute;
  top: 58px;
  left: 0;
  width: 250px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  line-height: normal;
  padding: 20px;
  span {
    color: #969696;
    font-size: 14px;
  }
  .iconfont {
    float: right;
    font-size: 14px;
    line-height:20px;
  }
  a {
    color: #777;
    text-decoration: none;
  }
`
export const SearchItem = styled.li`
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
`