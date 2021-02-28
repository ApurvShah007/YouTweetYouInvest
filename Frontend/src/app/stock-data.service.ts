import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private url: string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart'
  private key: string = 'ea5f15c064mshfef3baa6dfdeb3ep12e2c4jsnafd202753bec'
  constructor(private http: HttpClient) { 


  }


  getStockData(stock: string, range: string, region: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.key,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    })
    const params = new HttpParams().append("symbol", stock).append("region", region).append("range", range).append("interval", "1d")
    return this.http.get(this.url, {
      params: params,
      headers: headers
    })
  }

}
