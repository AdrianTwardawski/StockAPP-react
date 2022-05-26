import { Route, Routes } from 'react-router-dom';
import Stocks from '../pages/Stocks';
import Portfolio from '../pages/Portfolio';
import Home from '../pages/Home';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';

import '../styles/Content.css';

function Content(props) {
  return (
    <section>
      <Routes>
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/home' element={<Home email={props.email}/>} />
        <Route path='/login' element={<Login setEmail={props.setEmail}/>} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </section>
  )
}

export default Content