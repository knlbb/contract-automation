import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
// import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createaccount" element={<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
