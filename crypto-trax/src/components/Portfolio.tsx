import { Typography } from '@material-ui/core';
import React from 'react';
import CoinbaseService from '../services/coinbase.service';

const products = CoinbaseService.getProducts();

const Portfolio = () => {
  return (
    <div>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        {products[0]}
      </Typography>
    </div>
  );
}

export default Portfolio;