import React, {useEffect, useState} from 'react';
import {fetchList} from "./services/api.service";
import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ListItem from "./components/ListItem";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, SetList] = useState<any>([]);

  useEffect(() => {fetchList().then(
      function (temp) {
        SetList(temp);
      }
    );
  },[]);

  return (
    <Container>
      <Row>
        <Row>
          <h1>Incomplete</h1>
          <div style={{display: "flex", flexWrap: "wrap"}}>
          {list?.map((item: any, index: any) => {
            return(
              <div>
                {!item.completed && <ListItem title={item?.title}/>}
              </div>
            );
          })}
          </div>
        </Row>
        <Row>
          <h1>Complete</h1>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
          {list?.map((item: any, index: any) => {
            return(
              <div>
                {item.completed && <ListItem title={item?.title}/>}
              </div>
            );
          })}
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
