import * as React from 'react';
import styled from 'styled-components';
import * as data from '../../results.json';

interface FeatureOneListProps {
  index: number;
}

const FeatureOneListBlock = styled.div`
  margin: auto;
  margin-top: 30px;
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

function FeatureOneList({ index }: FeatureOneListProps) {
  const featureOne: Array<String> = data.results[index].featureOne;

  const listFeatures = featureOne.map((v, i) => {
    return (
      <List>
        <i className="fas fa-circle"></i>
        <li className="list">{v}</li>
      </List>
    );
  });

  return <FeatureOneListBlock>{listFeatures}</FeatureOneListBlock>;
}

export default FeatureOneList;
