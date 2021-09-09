import * as React from 'react';
import styled from 'styled-components';
import QuestionContainer from './containers/questionContainer';
import ButtonsContainer from './containers/buttonsContainer';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import media from '../style/media';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const QuestionPageBlock = styled.div`
  position: absolute;
  background-color: #1a1d26;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const QuestionsBlock = styled.div`
  max-width: 500px;
  width: 70%;
  margin: auto;
  margin-bottom: 100px;
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
    bottom: 0px;
    position: absolute;
    ${media.small} {
      padding-top: 10px;
      height: 20px;
      font-size: 10px;
    }
  }
`;

function QuestionCheck() {
  const check = useSelector((state: RootState) => state.checks.process);
  var ready: boolean = true;
  for (let i = 0; i < check.length; i++) {
    if (check[i] === false) {
      ready = false;
    }
  }
  return <>{ready ? <Redirect to="/result"></Redirect> : <Redirect to="/"></Redirect>}</>;
}

export default QuestionCheck;
