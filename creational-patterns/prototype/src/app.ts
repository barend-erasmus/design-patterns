import { Nascar } from './nascar';

const nascar: Nascar = new Nascar(5870);

const testNascar: Nascar = nascar.clone();
testNascar.displacement = 6000;

console.log(nascar.toString());
console.log(testNascar.toString());
