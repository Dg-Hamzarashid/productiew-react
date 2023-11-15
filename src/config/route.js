import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListining from "../component/products";
import ProductDetail from "../component/productdetail";


export default function AppRouting() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListining />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
