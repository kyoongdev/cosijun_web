import * as React from 'react';
import styled from 'styled-components';
import * as data from '../../results.json';
import media from '../../style/media';

interface MatchImageProps {
  index: number;
}

const MatchImageBlock = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 60px;
`;

const Block = styled.div`
  width: 50%;
  height: auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
  color: #19f7d0;
`;

const ImageOne = styled.div`
  width: 222px;
  height: 285px;
  margin-top: 10px;
  cursor: pointer;
  ${media.small} {
    width: 180px;
    height: 250px;
  }
  ${media.xsmall} {
    width: 130px;
    height: 200px;
  }
  .matchImage {
    width: 100%;
    height: 100%;
  }
`;

const ImageTwo = styled.div`
  width: 222px;
  height: 285px;
  margin-top: 10px;
  cursor: pointer;
  ${media.small} {
    width: 180px;
    height: 250px;
  }
  ${media.xsmall} {
    width: 130px;
    height: 200px;
  }
  .matchImage {
    width: 100%;
    height: 100%;
  }
`;

const Type = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  color: #6c6c72;
  margin-bottom: 16px;
  text-align: center;
`;

function btnClick(link: string) {
  window.open(link);
}

function MatchImage({ index }: MatchImageProps) {
  const matchOne: number = data.results[index].match[0];
  const matchTwo: number = data.results[index].match[1];
  const linkOne: string = data.results[matchOne - 1].link;
  const linkTwo: string = data.results[matchTwo - 1].link;
  const imageOne: string = data.results[matchOne - 1].matchImage;
  const imageTwo: string = data.results[matchTwo - 1].matchImage;
  const typeOne: string = data.results[matchOne - 1].type;
  const typeTwo: string = data.results[matchTwo - 1].type;
  //TODO: 이미지 추가
  return (
    <MatchImageBlock>
      <Block>
        <Title>우리는 운명</Title>
        <Type>{typeOne}</Type>
        <ImageOne onClick={() => btnClick(linkOne)}>
          {<img className="matchImage" src={imageOne} alt="" />}
        </ImageOne>
      </Block>
      <Block>
        <Title>우리는 에러</Title>
        <Type>{typeTwo}</Type>
        <ImageTwo onClick={() => btnClick(linkTwo)}>
          {<img className="matchImage" src={imageTwo} alt="" />}
        </ImageTwo>
      </Block>
    </MatchImageBlock>
  );
}

export default MatchImage;
