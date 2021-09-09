import * as React from 'react';
import styled from 'styled-components';
import media from '../../style/media';

interface QuestionProps {
  question: string;
  page: number;
}

const QuestionBlock = styled.div`
  padding-top: 60px;
  ${media.small} {
    padding-top: 50px;
  }
`;
const IndexBlock = styled.div`
  font-size: 28px;
  line-height: 0.93;
  text-align: center;
  color: #6c6c72;
  margin-bottom: 28px;
`;
const Context = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.43;
  text-align: center;
  color: #19f7d0;
  ${media.small} {
    font-size: 20px;
  }
`;

function Question({ question, page }: QuestionProps) {
  return (
    <QuestionBlock>
      <IndexBlock>{page + '/12'}</IndexBlock>
      <Context dangerouslySetInnerHTML={{ __html: question }}></Context>
    </QuestionBlock>
  );
}

export default Question;
