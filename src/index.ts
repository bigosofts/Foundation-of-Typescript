//Typescript Indexed property

//indexed property is the property which name is unknow before using it

interface Product {
  id: number;
  name: string;
  [prop: string]: string | number; //property unknown
}


const product1: Product = {
  id: 1,
  name:"Book",
  value: 10
}