import * as React from 'react';
import Question from '../components/question';
import * as data from '../../questions.json';

interface QuestionContainerProps {
  page: number;
}

type TParams = { id: string };
function QuestionContainer({ page }: QuestionContainerProps) {
  return (
    <>
      <Question question={data.questions[page - 1].question} page={page} />
    </>
  );
}

export default QuestionContainer;
