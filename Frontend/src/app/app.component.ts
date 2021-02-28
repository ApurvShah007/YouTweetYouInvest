import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { StockDataService } from './stock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  
  constructor(
    private  stockService: StockDataService, 
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    
    
  }



}
