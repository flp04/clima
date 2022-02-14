import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CidadesService } from 'src/app/services/cidades.service';

@Component({
  selector: 'app-lista-cidades',
  templateUrl: './lista-cidades.component.html',
  styleUrls: ['./lista-cidades.component.css']
})
export class ListaCidadesComponent implements OnInit {

  cidades = this.cidadesService.cidades
  @Output() cidadeSelecionada = new EventEmitter()
  
  constructor(private cidadesService: CidadesService) { }

  ngOnInit(): void {
  }

  selecionarCidade(evento: any){
    this.cidadeSelecionada.emit(evento.target.value)
  }
}
