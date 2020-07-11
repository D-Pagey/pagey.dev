import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import { PageHome } from '../PageHome';
import { PageCV } from '../PageCV';
import { PageTracker } from '../PageTracker';
import { PageChecklist } from '../PageChecklist';
import * as S from './styles';

const App = () => (
    <BrowserRouter>
        <S.Wrapper>
            <S.GlobalStyle />
            <Header />

            <Switch>
                <Route exact path="/" component={PageHome} />
                <Route path="/cv" component={PageCV} />
                <Route path="/tracker" component={PageTracker} />
                <Route path="/checklist" component={PageChecklist} />
            </Switch>
        </S.Wrapper>
    </BrowserRouter>
);

export default App;
