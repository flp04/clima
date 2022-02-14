import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const baseURL = "https://apiprevmet3.inmet.gov.br/previsao/"

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private httpClient:HttpClient) { }

  getClima(codCidade: number):Observable<any>{
    return this.httpClient.get(`https://apiprevmet3.inmet.gov.br/previsao/${codCidade}`)
  }
}
