import React, { useEffect, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "./components/ListItem";
import { fetchList } from "./services/api.service";
import { ITask } from "./types";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [completeTask, setCompleteTasks] = useState([]);
  const [incompleteTask, setIncompleteTasks] = useState([]);

  useEffect(() => {
    fetchList()
      .then((res) => {
        setCompleteTasks(res.data.filter((item: ITask) => item.completed));
        setIncompleteTasks(res.data.filter((item: ITask) => !item.completed));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Incomplete</h1>
          <ListItem items={incompleteTask} />
        </Col>
        <Col>
          <h1>Complete</h1>
          <ListItem items={completeTask} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
