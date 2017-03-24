import React, { Component } from 'react';
import Address from './Address';
import LineItemEditor from './LineItemEditor';

class LineItemModel {
  constructor(id, quantity, description, unitPrice) {
    this.id = id;
    this.quantity = quantity;
    this.description = description;
    this.unitPrice = unitPrice;
  }

  get subTotal() {
    return this.quantity * this.unitPrice;
  }
}

class EditInvoice extends Component {
  render() {
    const mockAddress = {
      line1: '16 The Harbor',
      town: 'Newport',
      county: 'Gwent',
      country: 'Wales'
    };

    const mockLineItems = [
      new LineItemModel(1, 3, 'Special annodized widgets', 38.0),
      new LineItemModel(2, 2, 'Erusticated thorbstrobblers', 146.0)
    ];

    return (
      <div>
        <h1 className='pt4 pt5-ns pb4 dark-gray'>Edit Invoice</h1>
        <Address address={mockAddress} />
        <LineItemEditor lineItemModel={mockLineItems} />
        <br />
        <br />
      </div>
    );
  }
}

export default EditInvoice;
