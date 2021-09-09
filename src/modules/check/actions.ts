import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const ACTIVATE_CHECK = 'check/ACTIVATE_CHECK';
export const CHECK_PROCESS = 'check/CHECK_PROCESS';

export const activateCheck = createStandardAction(ACTIVATE_CHECK)<{
  question_idx: number; // 문제번호
  answer_score: number; // 점수(+1 or -1)
}>();

export const checkProcess = createStandardAction(CHECK_PROCESS)<{
  question_idx: number;
}>();
