import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from './TransactionHystory.styled.js';

const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <TableRow key={item.id} $even={index % 2 === 0}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{parseFloat(item.amount).toFixed(2)}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
