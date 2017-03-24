import React from 'react';
import logo from '../logo.svg';

export default () => (
  <header className='tc pv2 pv2-ns'>
    <img src={logo} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
    <h1 className='f5 f4-ns fw6 mid-gray'>InvoiceMaster</h1>
    <h2 className='f6 gray fw2'>Create and edit your invoices here</h2>
  </header>
);
