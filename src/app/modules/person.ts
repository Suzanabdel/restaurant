export class Person {
  id?: number;
  productName: string;
  price: number;
  type: string;



constructor(id: number = 0,
    productName: string = '', price: number=0, type: string = '') {
this.id = id;
this.productName = productName;
this.price = price;
this.type = type;
}

}
