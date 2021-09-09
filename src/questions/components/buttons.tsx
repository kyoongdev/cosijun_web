import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activateCheck, checkProcess } from '../../modules/check/actions';
import media from '../../style/media';

interface ButtonsProps {
  questionOne: string;
  questionTwo: string;
  page: number;
}

const ButtonsBlock = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
  ${media.xsmall} {
    margin-top: 40px;
  }
`;

const Button = styled.div`
  width: auto;
  font-weight: 500;
  padding: 34px 18px 34px 26px;
  border-radius: 6px;
  background-color: #3e3e46;
  font-size: 18px;
  line-height: 1.44;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  ${media.small} {
    font-size: 15px;
  }
  ${media.xsmall} {
    padding: 24px 8px 24px 16px;
  }
`;

const OR = styled.div`
  font-size: 28px;
  line-height: 1.43;
  text-align: center;
  color: #6c6c72;
  font-weight: 500;
  margin-top: 18px;
  margin-bottom: 18px;
  ${media.small} {
    font-size: 20px;
  }
`;

function Buttons({ questionOne, questionTwo, page }: ButtonsProps) {
  const dispatch = useDispatch();
  const answers = React.useCallback(
    (question_idx: number, answer_score: number) =>
      dispatch(
        activateCheck({
          question_idx: question_idx,
          answer_score: answer_score,
        }),
      ),
    [dispatch],
  );
  const check = React.useCallback(
    (question_idx: number) =>
      dispatch(
        checkProcess({
          question_idx: question_idx,
        }),
      ),
    [dispatch],
  );

  const route = page === 12 ? `/check` : `/test/${page + 1}`;

  return (
    <ButtonsBlock>
      <Link to={route} style={{ textDecoration: 'none' }}>
        <Button
          onClick={() => {
            answers(page, 1);
            check(page - 1);
          }}
          dangerouslySetInnerHTML={{ __html: questionOne }}
        ></Button>
      </Link>
      <OR>or</OR>
      <Link to={route} style={{ textDecoration: 'none' }}>
        <Button
          onClick={() => {
            answers(page, -1);
            check(page - 1);
          }}
          dangerouslySetInnerHTML={{ __html: questionTwo }}
        ></Button>
      </Link>
    </ButtonsBlock>
  );
}

export default Buttons;
