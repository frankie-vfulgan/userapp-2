import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user){
    setUsers([...users, user]);
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="4">
            <UserForm addUser={addUser} />
          </Col>

          <Col>
            <UserList allUsers={users} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
