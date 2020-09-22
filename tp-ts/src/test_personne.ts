import { Personne } from "./personne";

//import { Personne /* , add */} from './personne';
let p1 : Personne;
p1 = new Personne();
p1.age=33;
console.log("p1="+  JSON.stringify(p1));

var p2 : Personne;
p2 = new Personne("Bon" , "jean" , 40);
//p2.age = p2.age + 1;
p2.incrementerAge();
//var res = add(5,6); console.log("res=" + res);
console.log("p2="+ JSON.stringify(p2));
