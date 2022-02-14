import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidades = [{
    "cidade": "Aracaju, SE", "cod": 2800308
  },{
    "cidade": "Belém, PA", "cod": 1501402
  },{
    "cidade": "Belo Horizonte, MG", "cod": 3106200
  },{
    "cidade": "Boa Vista, RR", "cod": 1400100
  },{
    "cidade": "Campo Grande, MT", "cod": 5002704
  },{
    "cidade": "Cuiabá, MS", "cod": 5103403
  },{
    "cidade": "Curitiba, PR", "cod": 4106902
  },{
    "cidade": "Florianópolis, SC", "cod": 4205407
  },{
    "cidade": "Fortaleza, CE", "cod": 2304400
  },{
    "cidade": "Goiânia, GO", "cod": 5208707
  },{
    "cidade": "João Pessoa, PB", "cod": 2507507
  },{
    "cidade": "Maceió, AL", "cod": 2704302
  },{
    "cidade": "Macapá, AP", "cod": 1600303 
  },{
    "cidade": "Manaus, AM", "cod": 1302603
  },{
    "cidade": "Natal, RN", "cod": 2408102
  },{
    "cidade": "Palmas, TO", "cod": 1721000
  },{
    "cidade": "Porto Alegre, RS", "cod": 4314902
  },{
    "cidade": "Porto Velho, RO", "cod": 1100205
  },{
    "cidade": "Recife, PE", "cod": 2611606
  },{
    "cidade": "Rio Branco, AC", "cod": 1200401
  },{
    "cidade": "Rio de Janeiro, RJ", "cod": 3304557
  },{
    "cidade": "Salvador, BA", "cod": 2927408
  },{
    "cidade": "Sâo Luís, MA", "cod": 2111300
  },{
    "cidade": "São Paulo, SP", "cod": 3550308
  },{
    "cidade": "Teresina, PI", "cod": 2211001
  },{
    "cidade": "Vitória, ES", "cod": 3205309
  }]

  constructor() { }
}
