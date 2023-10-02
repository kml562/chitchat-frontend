
import {Routes,Route,Navigate} from "react-router-dom"
import Chat from "./pages/chat"
import Signup from "./pages/Signup"
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./component/Navbar";

function App() {
 

  return (
   <>
   < Navbar />
    <Container>
   <Routes>
    <Route path="/" element={<Chat />}/>
    <Route path="*" element={<Navigate to="/"/>}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/login"  element={<Login />}/>
   </Routes>
    </Container>
    </>
  )
}

export default App
