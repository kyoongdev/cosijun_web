import * as React from 'react';
import styled from 'styled-components';
import * as data from '../../results.json';

interface FeatureTwoListProps {
  index: number;
}

const FeatureTwoListBlock = styled.div`
  margin: auto;
  margin-top: 60px;
  width: 90%;
`;

const List = styled.div`
  display: flex;
  .list {
    font-size: 16px;
    font-family: 'Noto Sans KR';
    text-align: left;
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

function FeatureTwoList({ index }: FeatureTwoListProps) {
  const featureOne: Array<string> = data.results[index].featureTwo;

  const title: Array<string> = data.results[index].title;
  const link: string = data.results[index].link;
  const listFeatures = featureOne.map((v, i) => {
    return (
      <List>
        <i className="fas fa-circle"></i>
        <li className="list" dangerouslySetInnerHTML={{ __html: v }}></li>
      </List>
    );
  });

  return (
    <FeatureTwoListBlock>
      <Title>{'내 안에 ' + title[1] + '가 있다고?'}</Title>
      {listFeatures}
      <Button onClick={() => btnClick(link)}>{title[1] + ' 더 알아보기'}</Button>
    </FeatureTwoListBlock>
  );
}

export default FeatureTwoList;
