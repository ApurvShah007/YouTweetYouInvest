import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private url: string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news'
  private key: string = '25d94db261msh7b9cf5c84c70cccp14f52ajsne084fef5c9fc'
  constructor(private http: HttpClient) { 

  }
  getNews(stock: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.key,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    })
    const params = new HttpParams().append("category", stock).append("region","US")
    return this.http.get(this.url,  {
      headers, 
      params
    })
  }

}
