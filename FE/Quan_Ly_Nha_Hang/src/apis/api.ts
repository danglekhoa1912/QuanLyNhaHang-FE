import axios from 'axios';
import {setupInterceptorsTo} from './interceptor';

const API = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

setupInterceptorsTo(API);

export default API;
