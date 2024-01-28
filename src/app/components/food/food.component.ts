import { Component } from '@angular/core';



export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}   


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
AddItem() {
throw new Error('Method not implemented.');
}
  // Used To Specify Title using Interpolation    
  title = 'Working With Array In Angular 5';    
    
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem: any;    
    
  // Provide some values to the array    
  constructor()    
  {    
    this.myItems.push(    
      new MyItems("Burger"),    
      new MyItems("Second Value"),    
      new MyItems("Third Value"),    
      new MyItems("Forth Value"),    
      new MyItems("Fifth Value")    
    );    
  }     
}
