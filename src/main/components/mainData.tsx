import * as React from 'react';
import styled from 'styled-components';

const Data = styled.div`
  margin-bottom: 10px;
  padding: 16px;
  height: 62px;
  background-color: #3e3e46;
  border-radius: 6px;
  color: #ffff;
`;

const DataTitle = styled.div`
  justify-content: center;
  display: flex;
  line-height: 1.44;
  font-size: 18px;
`;

const DataNumber = styled.div`
  margin-top: 14px;
  justify-content: center;
  display: flex;
  line-height: 1.08;
  font-size: 24px;
  letter-spacing: normal;
`;

const MainDataBlock = styled.div``;

interface MainDataProps {
  totalUser: number;
  mostFeatureNum: number;
  mostFeature: string;
  leastFeatureNum: number;
  leastFeature: string;
}

function addComma(totalUser: number) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return totalUser.toString().replace(regexp, ',');
}

function MainData({
  totalUser,
  mostFeatureNum,
  mostFeature,
  leastFeatureNum,
  leastFeature,
}: MainDataProps) {
  let mostRate: number = (mostFeatureNum / totalUser) * 100;
  let leastRate: number = (leastFeatureNum / totalUser) * 100;
  return (
    <MainDataBlock>
      <Data>
        <DataTitle>참여자 수</DataTitle>
        <DataNumber>{addComma(totalUser) + '명'}</DataNumber>
      </Data>
      <Data>
        <DataTitle>가장 많은 유형</DataTitle>
        <DataNumber>{mostFeature + ' (' + mostRate.toFixed(0) + '%)'}</DataNumber>
      </Data>
      <Data>
        <DataTitle>가장 적은 유형</DataTitle>
        <DataNumber>{leastFeature + ' (' + leastRate.toFixed(0) + '%)'}</DataNumber>
      </Data>
    </MainDataBlock>
  );
}

export default MainData;
