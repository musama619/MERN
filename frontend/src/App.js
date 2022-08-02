import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <NavBar />
      <Content style={{ padding: "0 50px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
}

export default App;
