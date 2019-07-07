import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import PageHome from '../PageHome';
import PageCV from '../PageCV';
import * as S from './styles';

const App = () => {
    return (
        <BrowserRouter>
            <S.Wrapper data-testid="pageHome">
                <S.GlobalStyle />
                <Header />

                <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route path="/cv" component={PageCV} />
                </Switch>
            </S.Wrapper>
        </BrowserRouter>
    );
};

export default App;
