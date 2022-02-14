import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Output() dataSelecionada = new EventEmitter

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  selecionarData(dia: string){
    if(dia == 'amanha'){
      this.dataSelecionada.emit('amanha')
    }else if(dia == 'hoje'){
      this.dataSelecionada.emit('hoje')
    }
  }

}