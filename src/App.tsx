import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Views from './components/Views';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Views/>}/>
      </Routes>
    </BrowserRouter>
  );
}

