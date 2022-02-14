import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  agora = new Date

  constructor() { }

  setHoje(){
    this.agora = new Date
    return `${this.formatarData(this.agora.getDate())}/${this.formatarData(this.agora.getMonth()+1)}/${this.formatarData(this.agora.getFullYear())}`
  }
  setPeriodo(){
    if(this.agora.getHours()<=12){
      return "manha"
    }else if(this.agora.getHours()<=18){
      return "tarde"
    }else{
      return "noite"
    }
  }
  setAmanha(){
    this.agora = new Date
    this.agora.setDate(this.agora.getDate()+1)
    return `${this.formatarData(this.agora.getDate())}/${this.formatarData(this.agora.getMonth()+1)}/${this.agora.getFullYear()}`
  }

  formatarData(data: number){
    if(data < 10){
      return "0" + data
    }else{
      return data
    }
  }
}
