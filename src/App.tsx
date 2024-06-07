import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApiHandling from './pages/apihandling';
import ProductDetails from './components/ProductDetails';

export default function App(){
  return (
      <Router>
          <Routes>
              <Route path="/" element={<ApiHandling />} />
              <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
      </Router>
  );
}; 
