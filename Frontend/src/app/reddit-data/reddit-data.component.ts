import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { RedditDataService } from '../reddit-data.service';
import { RedditPost } from './types';

@Component({
  selector: 'reddit-data',
  templateUrl: './reddit-data.component.html',
  styleUrls: ['./reddit-data.component.css']
})
export class RedditDataComponent implements OnInit {
 
  @Input("stock") stock: string;
  redditPosts: RedditPost[] ;
  constructor(private reddit: RedditDataService) { }

  ngOnInit(): void {
    this.reddit.getTwitterData(this.stock, 30).pipe(
        map((data: any) => {
            const posts: RedditPost[] =  data.data.map(row => {
              const post: RedditPost = {
                link: row.full_link,
                text: row.selftext,
                subreddit: row.subreddit,
                title: row.title
              }
              return post
            })
            return posts
        })
      ).subscribe(data => {
        this.redditPosts = data.filter(post => {
          
          return post.text && !post.text.includes("[removed]") && !post.text.includes("[deleted]") && post.text.length <= 2000

        })
       
      })
  }
  
  

}
