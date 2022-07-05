import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap'
import Home from './Pages/Home';
import Createpost from './Pages/Createpost'
import Post from './Pages/Post';

function App() {
  return (
    <div>
      <Router>

      <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/createpost"}>Create Post</Nav.Link>
          </Nav>
          </Container>
      </Navbar>

        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/createpost" element={ <Createpost /> } />
          <Route path="/post/:id" element={ <Post /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
