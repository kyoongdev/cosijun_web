import * as React from 'react';
import styled from 'styled-components';
import * as data from '../../results.json';

interface FeatureThreeListProps {
  index: number;
}

const FeatureThreeListBlock = styled.div`
  margin: auto;
  margin-top: 60px;
  width: 90%;
`;

const List = styled.div`
  display: flex;
  .list {
    font-size: 16px;
    text-align: left;
    font-family: 'Noto Sans KR';

    line-height: 1.38;
    color: #e9e9e9;
    margin-bottom: 16px;
    list-style: none;
  }
  .fas {
    padding-top: 7px;
    color: #e9e9e9;
    padding-right: 12px;
    font-size: 10px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 2;
  color: #19f7d0;
  padding-bottom: 4px;
  border-bottom: solid 2px #19f7d0;
  margin-bottom: 24px;
`;

const Button = styled.div`
  height: 30px;
  margin: auto;
  margin-top: 32px;
  padding: 15px 20px;
  border-radius: 6px;
  background-color: #e9e9e9;
  font-size: 20px;
  text-align: center;
  color: #1a1d26;
  line-height: 2;
  font-weight: bold;
  cursor: pointer;
`;

function btnClick(link: string) {
  window.open(link);
}

function FeatureThreeList({ index }: FeatureThreeListProps) {
  const featureOne: Array<String> = data.results[index].featureThree;

  const title: Array<String> = data.results[index].title;
  const link: string = data.results[index].link;
  const listFeatures = featureOne.map((v, i) => {
    return (
      <List>
        <i className="fas fa-circle"></i>
        <li className="list">{v}</li>
      </List>
    );
  });

  return (
    <FeatureThreeListBlock>
      <Title>{'현실 ' + title[1] + '가 되려면?'}</Title>
      {listFeatures}
      <Button onClick={() => btnClick(link)}>
        {title[1].substr(0, title[1].length) + ' 독학하러 가기'}
      </Button>
    </FeatureThreeListBlock>
  );
}

export default FeatureThreeList;
