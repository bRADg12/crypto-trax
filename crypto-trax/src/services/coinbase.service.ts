import axios from 'axios';
import constants from '../constants'
import { getProducts } from '../models/coinbase_pro';
const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();


interface SearchResponse {
  fhirRequest: string;
  fhirResults: string;
}

const http = axios.create({
  baseURL: constants.BaseApiUrl,
  headers: {
    "Content-type": "application/json"
  }
});

class CoinbaseService {

  search(params: any) {
    return http.get<SearchResponse>(constants.SearchEndpoint, { params });
  }

  getProducts(): getProducts[] {
    return publicClient.getProducts()
    .then((data: any) => {
      console.log(data);
      return data;
    })
    .catch((err: any) => {
      console.error(err);
    });
  }

}

export default new CoinbaseService();