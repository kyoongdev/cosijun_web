import * as React from 'react';
import Buttons from '../components/buttons';
import * as data from '../../questions.json';

interface ButtonsContainerProps {
  page: number;
}

function ButtonsContainer({ page }: ButtonsContainerProps) {
  return (
    <>
      <Buttons
        questionOne={data.questions[page - 1].answers[0]}
        questionTwo={data.questions[page - 1].answers[1]}
        page={page}
      />
    </>
  );
}

export default ButtonsContainer;
