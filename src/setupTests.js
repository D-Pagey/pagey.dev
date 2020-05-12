import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

global.render = (ui) => {
    return render(<Router history={createMemoryHistory()}>{ui}</Router>);
};
