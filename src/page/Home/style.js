import styled,{keyframes} from 'styled-components'

  // Container,
  // Carousel,
  // ContentList,
  // RankList,
  // AdBox,
  // QrCode,
  // ArtisitList,
const waitAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Container = styled.div`
  margin: 0 auto;
  width: 960px;
  display: flex;

  margin-top: 30px;
  .left {
    flex: 2;
  }
  .right {
    flex: 1;
    padding-left: 40px;
  }
`
export const Carousel = styled.div`
  width: 625px;
  height: 270px;
  position: relative;
  display: hidden;
  border-radius: 6px;
  background: url(${props => props.background});
  background-size: cover;
  margin-bottom: 30px;
`
export const ContentList = styled.ul`
`
export const ContentItem = styled.li`
  width: 625px;
  height: 180px;
  border-bottom: 1px solid #f0f0f0;
  margin-top: 28px;
  section { 
    margin-left: 25px;
    float: left;
    div {
      a{
        text-decoration: none;
        color: #333;
        font-size: 20px;
        font-weight: 700;
        &:hover {
          text-decoration: underline;
        }
      } 
      margin-bottom: 25px;
    }
    article {
      margin-left: 25px;
      font-size: 15px;
      line-height: 1.5
      color: #999;
      span {
        font-size: 17px;
        color: #ea6f5a;
      }
    }
  }

  aside {
    float: right;
    border-radius: 15px;
    overflow: hidden;
  }
`
export const ContentWait = styled.li`
  width: 625px;
  height: 180px;
  border-bottom: 1px solid #f0f0f0;
  line-height: 180px;
  text-align:center;
  i {
    animation: 3s ${waitAnimation} ease-out infinite; 
    display: inline-block;
  }
`
export const MoreContentButton = styled.button`
  width: 98%
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align:center;
  font-size: 15px;
  color: #fff;
  border-radius: 20px;
  border: none;
  background-color: #a5a5a5;
  &.active {
    background-color: #9b9b9b;
  }
`
export const GotoTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 50px;
  line-height: 50px;
  text-align:center;
  color: #9b9b9b;
  border: 1px solid #dcdcdc;
  
`

export const RankList = styled.ul`

`
export const RankItem = styled.li`
  width: 280px;
  height: 50px;
  background: url(${props => props.background});
  background-size: contain;
  margin-bottom: 8px;
  padding-left: 25px;
  cursor: pointer;
  span {
    color: #fff;
    line-height: 50px;
    font-weight: 600;
  } 
`
export const QrCode = styled.div`
  width: 280px;
  height: 85px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  margin-bottom: 30px;
  position: relative;
  padding: 10px;
  div.qrSmall {
    background: url(${props => props.background});
    background-size: contain;
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
  h4 {
    font-size: 14px;
    color: #333;
    margin-top: 12px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: #999;
  }
  &:hover div.qrBig {
    display: block;
  }

`
export const QrItem = styled.div`
  position: absolute;
  display: none;
  width: 180px;
  height: 180px;
  padding: 15px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  top: -190px;
  left: 47px;
  z-index: 999;
  background-color: #fff;
  section {
    background: url(${props => props.background});
    background-size: contain;
    width: 150px;
    height: 150px;
  }
  &:before {
    content: '';
    background-color: #fff;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    bottom: -8px;;
    left: calc(50% - 6px);
    width: 12px;
    height: 12px;
    position: absolute;
    transform: rotate(45deg);
  }
`
export const AdBox = styled.div`
  width: 280px;
  height: 160px;
  background: url(${props => props.background});
  background-size: cover;
  border-radius: 5px;
  overflow: hidden;
`