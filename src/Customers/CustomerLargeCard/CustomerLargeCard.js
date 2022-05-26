import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './CustomerLargeCard.module.scss';
const CustomerLargeCard = (props) => {
  const {
    name,
    email,
    phone,
    city,
    state,
    country,
    organization,
    jobProfile,
    additionalInfo,
  } = props.customer;
  return (
    <Card className={styles.mainContainer}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text className={styles.bodyText}>name: {name} </Card.Text>
        <Card.Text className={styles.bodyText}>email:{email} </Card.Text>
        <Card.Text className={styles.bodyText}>phone: {phone} </Card.Text>
        <Card.Text className={styles.bodyText}>city: {city} </Card.Text>
        <Card.Text className={styles.bodyText}>state: {state} </Card.Text>
        <Card.Text className={styles.bodyText}>country: {country} </Card.Text>
        <Card.Text className={styles.bodyText}>
          organization: {organization}{' '}
        </Card.Text>
        <Card.Text className={styles.bodyText}>
          job profile: {jobProfile}{' '}
        </Card.Text>
        <Card.Text className={styles.bodyText}>
          additional info: {additionalInfo}{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomerLargeCard;
