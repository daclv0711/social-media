import Main from 'Containers/body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Containers/header';
import { GlobalStyle } from './utils/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
