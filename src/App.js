import logo from './logo.svg';
import './App.css';
import Layout from "./pages/layout";
import NoPage from "./pages/noPage";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="noPage" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
