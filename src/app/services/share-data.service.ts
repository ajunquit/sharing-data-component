/**
 * ONE SERVICE CAN BE ABLE TO SHARE DATA BETWEEN ANY WAYS DIRECTIONS. 
 * EX: 
 * 
 * 1. PARENT TO CHILD
 * 2. CHILD TO PARENT
 * 3. ETC.
 * 
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private messageSource = new BehaviorSubject<string>("default message");

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string){
    this.messageSource.next(message);
  }
}
