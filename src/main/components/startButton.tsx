import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonBlock = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
`;

const Button = styled.div`
  width: auto;
  padding: 20px 82px 13px;
  border-radius: 6px;
  border: solid 2px #ffffff;
  font-size: 24px;
  text-align: center;
  font-family: GmarketSansBold;
  font-weight: bold;
  line-height: 1.08;
  color: #ffffff;
  cursor: pointer;
`;

function StartButton() {
  return (
    <ButtonBlock>
      <Link to="/test/1" style={{ textDecoration: 'none' }}>
        <Button>시작하기</Button>
      </Link>
    </ButtonBlock>
  );
}

export default StartButton;
