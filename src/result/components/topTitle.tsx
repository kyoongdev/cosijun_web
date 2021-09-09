import * as React from 'react';
import styled from 'styled-components';
import * as data from '../../results.json';

interface TopTitleProps {
  title: Array<string>;
  index: number;
  type: string;
}

const TopTitleBlock = styled.div`
  width: fit-content;
  margin: auto;
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
  color: #6c6c72;
  text-align: center;
`;
const TopTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.46;
  color: #e9e9e9;
  text-align: center;
`;
const BottomTitle = styled.div`
  background-color: #19f7d0;
  width: fit-content;
  padding-top: 2px;
  padding-left: 3px;
  padding-right: 3px;
  text-align: center;
  font-size: 28px;
  color: #1a1d26;
  margin: auto;
  margin-top: 8px;
`;

const SubText = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
  color: #6c6c72;
  margin-top: 20px;
  text-align: center;
`;

function TopTitles({ title, type, index }: TopTitleProps) {
  const mbti = data.results[index].character;
  return (
    <TopTitleBlock>
      <SubTitle>내 안에</SubTitle>
      <TopTitle dangerouslySetInnerHTML={{ __html: title[0] }}></TopTitle>
      <BottomTitle>{type}</BottomTitle>
      <SubText>{'아마 당신은 ' + mbti + '...?'}</SubText>
    </TopTitleBlock>
  );
}

export default TopTitles;
