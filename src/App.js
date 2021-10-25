import './App.css';
import Header from './Header/Header';
import Des from './Des';
import Aboutme from './AboutMe/Aboutme';
import Project from './Project/Project';
import { Container, Col } from "reactstrap";
import Comments from './Comments/Comments';


function App() {
  return (
    <>

      <Header></Header>

      <Container className="cit" style={{ width: "50%", margin: " auto" }}  >
        <Col className="col "> <Des /> </Col>
        <Col className="col "> <Aboutme /> </Col>
        <Col className="col my-5"> <Project /> </Col>
        <br/>
        <hr/>
        <Col className="col my-5"> <Comments /> </Col>
        <br/>
      </Container>
    </>
  );
}

export default App;
