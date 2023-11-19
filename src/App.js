import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import MyRoutes from './routes/Routes';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    
  <BrowserRouter>
  <Routes>

    {MyRoutes()}

  </Routes>
  </BrowserRouter>
  );
}

export default App;
