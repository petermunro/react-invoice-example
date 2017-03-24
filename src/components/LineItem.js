import React, { Component } from 'react';


class LineItem extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.lineItemData);

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.pushToCaller = this.pushToCaller.bind(this);
  }

  render() {
    const { quantity, description, unitPrice } = this.props.lineItemData;
    return (
      <tr>
        <td>
          <input type='text' value={quantity} onChange={this.handleQuantityChange} className='pa2 mr2 f6'></input>
        </td>
        <td>
          <input type='text' value={description} onChange={this.handleDescriptionChange} className='pa2 mr2 f6'></input>
        </td>
        <td>
          <input type='text' data-column="5" value={unitPrice} onChange={this.handlePriceChange} className='pa2 mr2 f6'></input>
        </td>
        <td>
          <p className='pa2 mr2 f6'>{quantity * unitPrice}</p>
        </td>
        <td>
          <button onClick={this.handleDeleteClick} className='f6 link dim ph3 pv1 mb2 dib white bg-dark-red bn'>Delete</button>
        </td>
      </tr>
    );
  }

  handleQuantityChange(e) {
    this.setState({ quantity: e.target.value }, this.pushToCaller);
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value }, this.pushToCaller);
  }

  handlePriceChange(e) {
    this.setState({ unitPrice: e.target.value }, this.pushToCaller);
  }

  pushToCaller() {
    this.props.onChange(this.props.id, {
      quantity: parseInt(this.state.quantity, 10),
      description: this.state.description,
      unitPrice: parseFloat(this.state.unitPrice),
    });
  }

  handleDeleteClick() {
    this.props.onDelete(this.props.id);
  }

}

export default LineItem;
