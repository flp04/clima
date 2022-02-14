import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima/clima.service';

const hoje = new Date

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidadeSelecionada: any
  dataSelecionada = "28/01/2022"
  temp_min: any
  temp_max: any
  resumo: any

  selecionarCidade(e: any){
    this.cidadeSelecionada = e.target.value
    this.climaService.getClima(this.cidadeSelecionada).subscribe(
      response => {
        this.temp_max = response[this.cidadeSelecionada][this.dataSelecionada]['manha']['temp_max']
        this.temp_min = response[this.cidadeSelecionada][this.dataSelecionada]['manha']['temp_min']
        this.resumo = response[this.cidadeSelecionada][this.dataSelecionada]['manha']['resumo']
      }
    )
  }
  definirData(e: any){
    this.dataSelecionada = e.target.value
    let temp = this.dataSelecionada.split("-")
    this.dataSelecionada = `${temp[2]}/${temp[1]}/${temp[0]}`
    this.climaService.getClima(this.cidadeSelecionada).subscribe(
      response => {
        if(e.target.value <= hoje.setDate(hoje.getDate()+2)){
          this.temp_max = response[this.cidadeSelecionada][this.dataSelecionada]['temp_max']
          this.temp_min = response[this.cidadeSelecionada][this.dataSelecionada]['temp_min']
          this.resumo = response[this.cidadeSelecionada][this.dataSelecionada]['resumo']
        }else{
          this.temp_max = response[this.cidadeSelecionada][this.dataSelecionada]['manha']['temp_max']
          this.temp_min = response[this.cidadeSelecionada][this.dataSelecionada]['manha']['temp_min']
          this.resumo = response[this.cidadeSelecionada][this.dataSelecionada]['manha']['resumo']
        }
      }
    )
  }

  cidades = [{
    "cidade": "Rio Branco, AC", "cod": 1200401
  },{
    "cidade": "Maceió, AL", "cod": 2704302
  },{
    "cidade": "Macapá, AP", "cod": 1600303 
  },{
    "cidade": "Manaus, AM", "cod": 1302603
  },{
    "cidade": "Salvador, BA", "cod": 2927408
  },{
    "cidade": "Fortaleza, CE", "cod": 2304400
  },{
    "cidade": "Vitória, ES", "cod": 3205309
  },{
    "cidade": "Goiânia, GO", "cod": 5208707
  },{
    "cidade": "Sâo Luís, MA", "cod": 2111300
  },{
    "cidade": "Campo Grande, MT", "cod": 5002704
  },{
    "cidade": "Cuiabá, MS", "cod": 5103403
  },{
    "cidade": "Belo Horizonte, MG", "cod": 3106200
  },{
    "cidade": "Belém, PA", "cod": 1501402
  },{
    "cidade": "João Pessoa, PB", "cod": 2507507
  },{
    "cidade": "Recife, PE", "cod": 2611606
  },{
    "cidade": "Teresina, PI", "cod": 2211001
  },{
    "cidade": "Natal, RN", "cod": 2408102
  },{
    "cidade": "Porto Alegre, RS", "cod": 4314902
  },{
    "cidade": "Rio de Janeiro, RJ", "cod": 3304557
  },{
    "cidade": "Porto Velho, RO", "cod": 1100205
  },{
    "cidade": "Boa Vista, RR", "cod": 1400100
  },{
    "cidade": "Florianópolis, SC", "cod": 4205407
  },{
    "cidade": "São Paulo, SP", "cod": 3550308
  },{
    "cidade": "Aracaju, SE", "cod": 2800308
  },{
    "cidade": "Palmas, TO", "cod": 1721000
  }]

  constructor(private climaService:ClimaService) { }

  ngOnInit(): void {
    
  }

}
