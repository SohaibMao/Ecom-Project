import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/Cart" caseSensitive={false} element={<Cart />} />
        <Route path="/Login" caseSensitive={false} element={<Login />} />
        <Route path="/Register" caseSensitive={false} element={<Register />} /> 
        <Route path="/ProductList" caseSensitive={false} element={<ProductList />} /> 
      </Routes>
    </Router>    
  </div>
  );
}

export default App;
