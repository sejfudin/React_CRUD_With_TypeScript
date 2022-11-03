
import Pages from './pages/Pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
