import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class MessangerService {
subject= new Subject()
  constructor() { }

  sendMsg(Product:any){
    
    this.subject.next(Product)
  }
  getMsg(){
    return this.subject.asObservable()
  }
}
