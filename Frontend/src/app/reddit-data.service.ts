import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditDataService {
  private url = (query: string, limit: number) => `http://api.pushshift.io/reddit/search/submission/?q=${query}&subreddit=stocks&sort=desc&size=${limit}`
  
  
  constructor(private http: HttpClient) {



   }
   getTwitterData(query: string, limit: number) {
     const url = this.url(query, limit)
 
     return this.http.get(url)
   }
   
}
