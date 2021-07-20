import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartItems = [
     {id:1,productId:1,productName:'Test 1',qty:1,price:50},
     {id:2,productId:3,productName:'Test 3',qty:2,price:20},
     {id:3,productId:2,productName:'Test 2',qty:2,price:30},
     {id:4,productId:4,productName:'Test 4',qty:2,price:40},
   ];
   cartTotal=0
  constructor(private msg:MessangerService) { }
  
  ngOnInit() {
    this.msg.getMsg().subscribe(product=>{
     console.log(product)
     this.cartItems.push
       
     
       
     
     this.cartItems.forEach(item=>{
       this.cartTotal += (item.qty * item.price)
      })
     })
      
    
   
  }

}
