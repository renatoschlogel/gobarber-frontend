import React from 'react';

import GlobalStyle from './styles/global';
// import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
