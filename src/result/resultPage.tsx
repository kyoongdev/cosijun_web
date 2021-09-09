import * as React from 'react';
import styled from 'styled-components';
import media from '../style/media';
import { RouteComponentProps } from 'react-router-dom';
import TopTitle from './components/topTitle';
import ResultImage from './components/resultImage';
import FeatureOneList from './components/featureOneList';
import FeatureTwoList from './components/featureTwoList';
import FeatureThreelist from './components/featureThreeList';
import MatchImages from './components/matchImages';
import HashTag from './components/hashTag';
import LinkButtons from './components/LinkButtons';
import PromotionBox from './components/pormotionBox';
import * as data from '../results.json';

type TParams = { id: string };

const ResultPageBlock = styled.div`
  background-color: #1a1d26;
  height: 100%;
  width: 100%;
  padding-top: 80px;
  ${media.small} {
    padding-top: 30px;
  }
`;
const ResultBlock = styled.div`
  max-width: 500px;
  margin: auto;
  margin-bottom: 70px;
  ${media.small} {
    margin-bottom: 50px;
  }
`;
const CopyRight = styled.div`
   {
    width: 100%;
    height: 30px;
    font-size: 16px;
    line-height: 1.3;
    text-align: center;
    color: #a1a1a1;
    padding-top: 20px;
    bottom: 0px;
    ${media.medium} {
      padding-top: 20px;
      height: 20px;
      font-size: 10px;
    }
  }
`;

function ResultPage({ match }: RouteComponentProps<TParams>) {
  let index: number = 0;
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].character === match.params.id) {
      index = data.results[i].index - 1;
    }
  }
  return (
    <ResultPageBlock>
      <ResultBlock>
        <TopTitle title={data.results[index].title} type={data.results[index].type} index={index} />
        <ResultImage index={index} />
        <FeatureOneList index={index} />
        <FeatureTwoList index={index} />
        <FeatureThreelist index={index} />
        <MatchImages index={index} />
        <LinkButtons
          link="http://comu.codeuniv.kr"
          description={data.results[index].featureOne[0]}
        />
        <HashTag />
        <PromotionBox />
      </ResultBlock>
      <CopyRight>ⓒ 2020 HuemoneLab Co.,Ltd All rights reserved.</CopyRight>
    </ResultPageBlock>
  );
}

export default ResultPage;
