import styled,{keyframes} from 'styled-components'


  // Container,
  // Title,
  // IntroduceBox,
  // IntroduceImg,
  // IntroduceContent,
  // IntroduceScore,
  // Artist,
  // Comments,
  // Trailer,
const waitAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Container = styled.div`
  margin: 50px auto;
  width: 650px;
`

export const Title = styled.div`
  height: 30px;
  margin-bottom: 50px;
  font-size: 26px;
  font-weight: 600;
  color: #494949;
  span {
    color: #888;
  }
`
export const IntroduceBox = styled.div`
  display: flex;
`
export const IntroduceImg = styled.div`
  flex: 1;
`
export const IntroduceContent = styled.div`
  h2 {
    color: #ea6f5a;
  }
  p {
    margin-top: 20px;
    text-indent: 2em;
    font-size: 14px;
  }
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.5;
`
export const IntroduceMsg = styled.div`
  flex: 1;
  font-size: 15px;
  line-height: 1.5;
  span {
    font-weight: 500;
    color: #666;
  }
  a {
    text-decoration: none;
    color: #37a;
  }
  h2 {
    font-size: 20px;
    color: #ea6f5a;
    margin-bottom: 50px;
  }
`
export const Artist = styled.div`
  h2 {
    color: #ea6f5a;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  li {
    display: inline-block;
    width: 95px;
    height: 160px;
    margin-right: 20px;
    text-align: center;
  }
  span {
    line-height: 1.5;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    font-size: 14px;
    color: #37a;
  }
`
export const Comments = styled.div`
  h2 {
    color: #ea6f5a;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  li {
    border-bottom: 1px solid #ddd;
    list-style: none;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 13px;
    p {
      margin-bottom: 10px;
      color: #494949;
      span {
        color: #37a;
        float: left;
      }
      text-align: right;
    }
  }
`
export const Trailer = styled.div`
  h2 {
    color: #ea6f5a;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  video {
    object-fit:fill;
  }
`

export const LoadContainer = styled.div`
  background-color: #f1f1f1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  z-index: 9999;
`
export const LoadBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  i {
    animation: 3s ${waitAnimation} ease-out infinite;
    display: inline-block;
  }
`
