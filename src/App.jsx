import { BrowserRouter } from 'react-router-dom';
import './App.css'
import AppRouter from './modules/AppRouter/AppRouter';
import Navbar from './modules/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
