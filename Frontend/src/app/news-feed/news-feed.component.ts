import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NewsServiceService } from '../news-service.service';
import { News } from '../news/types';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  newsArr: News[]
  @Input("stock") stock: string;
  @Input("limit") limit: number = 10;
  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {

    this.newsService.getNews(this.stock).pipe(
      map((data: any) => {
        const newsArr: News[] = data.items.result.map(row => {
          const news: News   = {
            link: row.link,
            title: row.title,
            summary: row.summary,
            pictureUrl: (row.main_image === null) ?  "assets/noImage.png": row.main_image.original_url
             
          }
          return news
        })
        return newsArr
      })
    ).subscribe(data => {
      this.newsArr = data
    })
  
  }

}
