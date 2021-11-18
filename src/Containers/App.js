import Main from 'Containers/Body';
import { Routes, Route } from "react-router-dom";
import Header from 'Containers/Header';
import { GlobalStyle } from 'utils/GlobalStyle';
import Auth from './Auth';
import { useSelector } from 'react-redux';
import { isLoggedInState$ } from 'redux/selectors/user';
import NotFound from './NotFound';
function App() {

  const isLoggin = useSelector(isLoggedInState$)

  return (
    <>
      {isLoggin && <Header />}
      <Routes>
        <Route path="/" element={isLoggin ? <Main /> : <Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
