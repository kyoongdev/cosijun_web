import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { CheckAction, Check } from './types';
import { ACTIVATE_CHECK, CHECK_PROCESS } from './actions';

// 초기 상태
const initialState: Check = {
  score: [0, 0, 0, 0], // 유형이 총 4가지
  process: [false, false, false, false, false, false, false, false, false, false, false, false],
};

// 리듀서
const checks = createReducer<Check, CheckAction>(initialState, {
  [ACTIVATE_CHECK]: (state, action) =>
    produce(state, draft => {
      switch (action.payload.question_idx) {
        case 1:
        case 5:
        case 9: // 노력 vs 효율
          draft.score[0] += action.payload.answer_score;
          break;
        case 2:
        case 6:
        case 10: // 감각 vs 직관
          draft.score[1] += action.payload.answer_score;
          break;
        case 3:
        case 7:
        case 11: // 판단 vs 인식
          draft.score[3] += action.payload.answer_score;
          break;
        case 4:
        case 8:
        case 12: // 사고 vs 감정
          draft.score[2] += action.payload.answer_score;
          break;
      }
    }),
  [CHECK_PROCESS]: (state, action) =>
    produce(state, draft => {
      draft.process[action.payload.question_idx] = true;
    }),
});

export default checks;
