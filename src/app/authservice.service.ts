import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable()
export class AuthserviceService implements CanActivate {

  constructor() { }

  canActivate(){
    let d = new Date();
    let currSec = d.getSeconds();
    console.log(currSec); 

    if(currSec % 2 == 0) {
       return true;
    } else {
      return false;
    }
  }

}
