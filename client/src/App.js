// import { Button } from 'antd';
// function App() {
//   return (
//     <div className="bg-primary h-screen flex justify-center items-center">
//     <div className="bg-white p-5">
//       <h1>SMP</h1>
//       <button className="bg-primary text-white p-2">Ant Button</button>
//     </div>
//   </div>

//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProctectedPage from "./components/ProctectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProductInfo from "./pages/ProductInfo";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Spinner />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProctectedPage>
                <Home />
              </ProctectedPage>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProctectedPage>
                <ProductInfo />
              </ProctectedPage>
            }
          />
          <Route
            path="/profile"
            element={
              <ProctectedPage>
                <Profile />
              </ProctectedPage>
            }
          />
          <Route
            path="/admin"
            element={
              <ProctectedPage>
                <Admin />
              </ProctectedPage>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
