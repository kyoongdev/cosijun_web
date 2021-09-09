import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CheckAction = ActionType<typeof actions>;

export type Check = {
  score: Array<number>; // 해당 문제의 점수 ([M,B,T,I])
  process: Array<boolean>;
};
