import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '5c4c45a692a34a5ba74c3a6c2c94ea4e';
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  public getCurrencyData(){
    return this.httpClient.get<any>(`https://api.exchangerate.host/symbols`);
  }
  public getCurrencyOutput(rate:any,currency_from:any,currency_to:any){
    return this.httpClient.get<any>(`https://api.exchangerate.host/convert?from=${currency_from}&to=${currency_to}&amount=${rate}`);
  }
}
