import * as React from 'react';
import styled from 'styled-components';
import media from '../style/media';
import HeaderImages from './components/headerImage';
import StartButton from './components/startButton';
import MainDataContainer from './containers/mainDataContainer';
import landingImage from '../static/images/landingImage.png';
import transitions from '../style/transitions';

const MainPageBlock = styled.div`
  position: absolute;
  background-color: #1a1d26;
  height: fit-content;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MainBlock = styled.div`
  max-width: 500px;
  width: 300px;
  margin: auto;
  margin-bottom: 100px;
  .div {
    font-size: 16px;
    font-weight: 500;
    line-height: 2;
    color: #6c6c72;
    margin-bottom: 16px;
    text-align: center;
  }
`;

// TODO: 일러스트 대체용
const MainImage = styled.div`
  width: 173px;
  height: 256px;
  margin: auto;
  .landingImage {
    animation: ${transitions.moveUpDown} 2.5s linear infinite;
    width: 100%;
    height: 100%;
  }
`;
const CopyRight = styled.div`
   {
    width: 100%;
    height: 30px;
    background-color: #3e3e46;
    font-size: 16px;
    line-height: 1.3;
    text-align: center;
    color: #a1a1a1;
    padding-top: 20px;
    margin-top: 30px;
    bottom: 0px;
    position: absolute;
    ${media.small} {
      padding-top: 10px;
      height: 20px;
      font-size: 10px;
    }
  }
`;
function MainPage() {
  return (
    <MainPageBlock>
      <MainBlock>
        <HeaderImages />
        <div className="div">
          내 안의 개발자를 찾아서...<i className="far fa-star"></i>
        </div>
        <MainImage>
          <img className="landingImage" src={landingImage} alt="" />
        </MainImage>
        <StartButton />
        <MainDataContainer />
      </MainBlock>
      <CopyRight>ⓒ 2020 HuemoneLab Co.,Ltd All rights reserved.</CopyRight>
    </MainPageBlock>
  );
}

export default MainPage;
