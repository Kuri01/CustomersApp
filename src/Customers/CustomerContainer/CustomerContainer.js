import React from 'react';
import customerList from '../../data/customerList';
import Header from '../Header/Header';
import styles from './CustomerContainer.module.scss';
import { Col, Row } from 'react-bootstrap';
import CustomerSmallCard from './../CustomerSmallCard/CustomerSmallCard';
import CustomerLargeCard from './../CustomerLargeCard/CustomerLargeCard';
class CustomerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.showCustomer = this.showCustomer.bind(this);
  }
  state = {
    customers: customerList,
    viewCurrent: customerList[0],
  };
  showCustomer = (customerId) => {
    console.log(customerId);
    const wantedCustomerIndex = this.state.customers.findIndex(
      (obj) => obj.id === parseInt(customerId)
    );
    console.log(wantedCustomerIndex);
    this.setState({
      ...this.state,
      viewCurrent: this.state.customers[wantedCustomerIndex],
    });
  };
  render() {
    return (
      <div className={styles.mainContainer}>
        <Header />
        <Row>
          <Col align='center'>
            {this.state.customers.map((customer) => (
              <CustomerSmallCard
                customer={customer}
                showCustomer={this.showCustomer}
                key={customer.id}
              />
            ))}
          </Col>
          <Col align='center'>
            <CustomerLargeCard customer={this.state.viewCurrent} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CustomerContainer;
