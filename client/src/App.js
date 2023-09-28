
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/login' element={<SignIn/>} />
          <Route path='/register' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
