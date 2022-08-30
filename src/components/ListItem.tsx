import React from "react";
import { Card } from "react-bootstrap";
import { IListItemProps, ITask } from "../types";

export default function ListItem(props: IListItemProps) {
  const { items } = props;
  return (
    <Card>
      <Card.Body>
        <ul>
          {items.map((item: ITask) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </Card.Body>
    </Card>
  );
}
