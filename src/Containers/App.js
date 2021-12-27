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
import ProtectedRoute from './ProtectedRoute';
import history from 'utils/history';
import Chat from './Chat';

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
      <Header user={user} />
      <Routes history={history}>
        <Route path="/" element={<>
          <Main user={user} />
        </>} />
        <Route path="/account/*" element={<Auth />} />
        <Route path="/setting" element={
          <ProtectedRoute>
            <Setting user={user} />
          </ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat user={user} /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <Loading />
    </>
  );
}

export default App;
