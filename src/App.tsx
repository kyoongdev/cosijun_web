import React from 'react';
import QuestionsPage from './questions/questionsPage';
import MainPage from './main/mainPage';
import ResultLoadingPage from './result/resultLoading';
import ResultPage from './result/resultPage';
import QuestionCheck from './questions/questionCheck';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/test/:id" component={QuestionsPage} />
        <Route exact path="/result" component={ResultLoadingPage} />
        <Route exact path="/result/:id" component={ResultPage} />
        <Route exact path="/check" component={QuestionCheck} />
      </Switch>
    </>
  );
}

export default App;
