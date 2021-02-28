import { Component, Input, OnInit } from '@angular/core';
import { News } from './types';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input("news") news: News;
  constructor() { }

  ngOnInit(): void {
  }

}
