import Main from 'Containers/Body';
import { Routes, Route } from "react-router-dom";
import Header from 'Containers/Header';
import { GlobalStyle } from 'utils/GlobalStyle';
import Auth from './Auth';
import NotFound from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from 'redux/actions/user.action';
import { infoUserState$ } from 'redux/selectors/user';
import { useEffect } from 'react';
import { getLocalStorage } from 'utils/localStorage';
import Setting from './Setting';
import Loading from './Loading';
function App() {

  const user = useSelector(infoUserState$)
  const dispatch = useDispatch();
  useEffect(() => {
    if ((!user?._id && getLocalStorage('refreshToken'))) {
      dispatch(UserAction.getUserRequest());
    }
  }, [dispatch, user?._id])

  return (
    <>
      {user && <Header />}
      <Routes>
        <Route path="/" element={user ? <Main user={user} /> : <Auth />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <Loading />
    </>
  );
}

export default App;
