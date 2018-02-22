import { Investor } from './observer/investor';
import { Stock } from './stock';

const stock: Stock = new Stock('stk1');

stock.observe(new Investor('Investor 1'));
stock.observe(new Investor('Investor 2'));
stock.observe(new Investor('Investor 3'));
stock.observe(new Investor('Investor 4'));

stock.notify(4.5);
