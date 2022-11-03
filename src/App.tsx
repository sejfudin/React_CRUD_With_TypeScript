
import Pages from './pages/Posts';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/new-page' element={<AddPost />} />
        <Route path='/posts/:id' element={<EditPost />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
