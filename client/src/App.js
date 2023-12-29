
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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


