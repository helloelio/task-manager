import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Important from './Important';
import './Main.css';

function Main() {
  return (
    <main className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Important />} />
          <Route path='/important' element={<Important />} />
          <Route path='/all' element={<Important />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
