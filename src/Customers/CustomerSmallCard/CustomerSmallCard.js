import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './CustomerSmallCard.module.scss';

const CustomerSmallCard = (props) => {
  const { id, name, email, phone } = props.customer;

  const handleClick = (event) => {
    props.showCustomer(event.target.value);
    console.log(event.target);
  };

  return (
    <Card className={styles.mainContainer}>
      <Card.Header className={styles.header}>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{email} </Card.Text>
        <Card.Text> {phone}</Card.Text>
        <Button value={id} onClick={handleClick}>
          View more details
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CustomerSmallCard;
