function ScorePermute(scores: Array<number>) {
  let grade: string = '';
  if (scores[0] > 0) {
    grade += 'E';
  } else {
    grade += 'I';
  }
  if (scores[1] > 0) {
    grade += 'S';
  } else {
    grade += 'N';
  }

  if (scores[2] > 0) {
    grade += 'T';
  } else {
    grade += 'F';
  }
  if (scores[3] > 0) {
    grade += 'J';
  } else {
    grade += 'P';
  }
  return grade;
}

export default ScorePermute;
