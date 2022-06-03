import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/signup' element={<SignUp></SignUp>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
