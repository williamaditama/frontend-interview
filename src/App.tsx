import { useEffect, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./components/ListItem";
import { fetchList } from "./services/api.service";

function App() {
  const [incompleteTodos, setIncompleteTodos] = useState<ToDo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const fn = async () => {
      const { data: todos } = await fetchList();

      const completed = todos.filter((todo) => todo.completed === true);
      setCompletedTodos(completed);

      const incomplete = todos.filter((todo) => todo.completed === false);
      setIncompleteTodos(incomplete);
    };

    fn();
  });

  return (
    <Container>
      <Row>
        <h1>Incomplete</h1>
        <div className="card-container">
          {incompleteTodos.map(({ id, title }) => (
            <ListItem className="card" key={id} title={title} />
          ))}
        </div>
      </Row>

      <Row>
        <h1>Complete</h1>
        <div className="card-container">
          {completedTodos.map(({ id, title }) => (
            <ListItem className="card" key={id} title={title} />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default App;
