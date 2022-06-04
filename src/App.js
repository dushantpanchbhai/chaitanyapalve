import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Header from "./Header";
import Login from './Login';
import SignUp from './SignUp';
import Card from './Card';

function App() {
  return (
    <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Card/>}/>
=======
          {/* <Route path="/" element={<Header/>}/> */}
>>>>>>> 70aea8590b9de7e875311f5048e3ddadc1846b51
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/signup' element={<SignUp></SignUp>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
