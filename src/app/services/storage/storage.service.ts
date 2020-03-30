import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor() { }

  public save(key:string,value: any):void{
    try{
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch{
      throw {error: 'Failed to set ${key} to the local storage'}
    }
  }
  public load(key:string):any{
    try{
      console.log(localStorage);
      return JSON.parse(localStorage.getItem(key))

    }
    catch{
      throw {error: 'Failed to get ${key} from the local storage'}
    }
  }
}
