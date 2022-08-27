import React from "react";
import { Card } from "react-bootstrap";
import cx from "classnames";

import styles from "./ListItem.module.css";

interface ListItemProps {
  title: string;
  className?: string;
}
export default function ListItem({ title, className }: ListItemProps) {
  const cardClassName = cx(styles, className);

  return (
    <Card className={cardClassName}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
