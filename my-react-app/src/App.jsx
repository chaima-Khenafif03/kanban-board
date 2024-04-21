import { BrowserRouter,Route,Routes } from "react-router-dom";
import'./App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Board from "./Pages/Board";
import Task from "./Pages/Task";
import Upload from "./Pages/Upload";
import Edit from "./Pages/Edit";
import CreateBoard from "./Pages/CreateBoard";
import BoardModel from "./Pages/BoardModel";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={< Home/>}/>
          <Route path="/about" element={< About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/client" element={<Client/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/board" element={<Board/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/createboard" element={<CreateBoard/>}/>
          <Route path="/boardmodel" element={<BoardModel/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}