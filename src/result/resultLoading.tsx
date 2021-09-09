import * as React from 'react';
import styled from 'styled-components';
import media from '../style/media';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Redirect } from 'react-router-dom';
import scorePermute from '../util/scorePermute';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { activateCheck } from '../modules/check/actions';
import { UPDATE_RESULT } from '../graphql/query';
import loadingAnimation from '../static/images/loadingAnimation.gif';

const Loading = styled.div`
  background-color: #1a1d26;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .gif {
    width: 40%;
    margin: auto;
    ${media.small} {
      width: 70%;
    }
  }
`;

function ResultLoadingPage() {
  const [done, setDone] = React.useState(false);
  const [load, setLoad] = React.useState(0);

  React.useEffect(() => {
    window.scrollTo(0, 600);
    setTimeout(() => {
      setLoad(load + 100);
    }, 300);
    setTimeout(() => {
      setDone(true);
      window.scrollTo(0, 0);
    }, 1600);
  }, []);
  const scores = useSelector((state: RootState) => state.checks.score);
  const dispatch = useDispatch();
  const resetStore = React.useCallback(
    (question_idx: number, answer_score: number) =>
      dispatch(
        activateCheck({
          question_idx: question_idx,
          answer_score: answer_score,
        }),
      ),
    [dispatch],
  );

  const [updateResult] = useMutation(UPDATE_RESULT, {
    variables: { character: scorePermute(scores) },
    ignoreResults: false,
    onCompleted() {
      for (let i = 0; i < scores.length; i++) {
        resetStore(i, 0);
      }
    },
  });
  updateResult();
  return (
    <>
      {!done ? (
        <Loading>
          <img className="gif" src={loadingAnimation} alt=""></img>
        </Loading>
      ) : (
        <Redirect to={`/result/${scorePermute(scores)}`}></Redirect>
      )}
    </>
  );
}

export default ResultLoadingPage;
