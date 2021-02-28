import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private url: string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data'
  private key: string = 'ea5f15c064mshfef3baa6dfdeb3ep12e2c4jsnafd202753bec'
  constructor(private http: HttpClient) { 


  }

  getStockData(stock: string, region: string) {
     const headers = new HttpHeaders({
       'x-rapidapi-key': this.key,
       'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
     })
     const params = new HttpParams().set("symbol", stock).append("region", region)
     const url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data"
     return this.http.get(url, {
       params: params,
       headers: headers
     })
  }

}
