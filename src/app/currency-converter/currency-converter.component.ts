import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  countryList:any;
  rate:any;
  currency_from:any;
  currency_to:any;
  result:any
  displayResult:any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.rate = 1;
    this.currency_from='USD';
    this.currency_to='INR';
    this.apiService.getCurrencyData().subscribe((data)=>{
      if([undefined,null,""].indexOf(data) == -1){
        console.log(data.symbols);
        this.countryList = Object.values(data.symbols);
        console.log(this.countryList);
        this.onCurrencyChange();
      }
    });
  }

  onCurrencyChange(){
    console.log(this.rate);
    console.log(this.currency_from);
    console.log(this.currency_to);
    this.apiService.getCurrencyOutput(this.rate,this.currency_from,this.currency_to).subscribe((data)=>{
      if([undefined,null,""].indexOf(data) == -1){
        console.log(data);
        this.result = data.result;
        if(this.countryList.filter((entry: { code: string; }) => entry.code === this.currency_from).length > 0){
          this.displayResult = this.rate +"  "+this.countryList.filter((entry: { code: string; }) => entry.code === this.currency_from)[0].description+" = "+this.result+" "+this.countryList.filter((entry: { code: string; }) => entry.code === this.currency_to)[0].description;
        }
      }
    });
  }

}
