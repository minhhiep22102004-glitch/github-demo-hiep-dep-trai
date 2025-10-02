import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";

// =============================
// Home
// =============================
function Home() {
  return (
    <div>
      <h2>Trang chủ</h2>
      <p>Chào mừng bạn đến với demo React Router DOM!</p>
    </div>
  );
}

// =============================
// About
// =============================
function About() {
  return (
    <div>
      <h2>Giới thiệu</h2>
      <p>Đây là trang About.</p>
    </div>
  );
}

// =============================
// User (dùng useParams)
// =============================
function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>Trang User</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

// =============================
// Contact (dùng useNavigate)
// =============================
function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Liên hệ</h2>
      <button onClick={() => navigate("/")}>Quay về Home</button>
    </div>
  );
}

// =============================
// Nested Routes (Products)
// =============================
function Products() {
  return (
    <div>
      <h2>Sản phẩm</h2>
      <ul>
        <li><Link to="phone">Điện thoại</Link></li>
        <li><Link to="laptop">Laptop</Link></li>
      </ul>
      {/* nơi render route con */}
      <Outlet />
    </div>
  );
}

function Phone() {
  return <p>Danh sách điện thoại</p>;
}
function Laptop() {
  return <p>Danh sách laptop</p>;
}

// =============================
// 404 Not Found
// =============================
function NotFound() {
  return <h2>404 - Trang không tồn tại</h2>;
}

// =============================
// App chính
// =============================
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>React Router DOM v6 Demo</h1>
        {/* Menu */}
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/about" style={{ marginRight: 10 }}>About</Link>
          <Link to="/user/123" style={{ marginRight: 10 }}>User</Link>
          <Link to="/contact" style={{ marginRight: 10 }}>Contact</Link>
          <Link to="/products" style={{ marginRight: 10 }}>Products</Link>
        </nav>

        {/* Định nghĩa routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          {/* Nested routes */}
          <Route path="/products" element={<Products />}>
            <Route path="phone" element={<Phone />} />
            <Route path="laptop" element={<Laptop />} />
          </Route>
          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
