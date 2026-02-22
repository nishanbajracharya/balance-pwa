import { config } from 'dotenv';

config();

export const BASE_ROUTE = process.env.BASE_ROUTE || '/';
