import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {map, tap} from 'rxjs/operators';
import * as d3 from "d3";

import { StockDataService } from '../stock-data.service';
import { StockRow } from './types';

@Component({
  selector: 'stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {
 
  stockData: StockRow[]
  stockDataLoaded: boolean = false
  margins = {
    top: 50,
    right: 50,
    bottom: 50, 
    left: 50
  }
  width: number
  height: number
  private svg;
  constructor(private  stockService: StockDataService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const stock: string = queryParams.stock
      if(stock) {
        this.getStockData(stock)
        .pipe(tap(() => this.stockDataLoaded = true))
        .subscribe(data => {
          this.stockData = data
          this.createChart()
       })
        
      }
      
      
    })
  }
  responsivefy(svg) {
    // get container + svg aspect ratio
    let container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}
createChart() {
  this.setUpChart()
  const [xScale, yScale] = this.setUpAxes()
  this.drawLine(xScale, yScale)
  this.renderVolumeChart(xScale)
}
setUpChart() {
     this.width = window.innerWidth - (this.margins.left + this.margins.right)
     this.height = window.innerHeight - (this.margins.top + this.margins.bottom)
     this.svg = d3.select("#chart")
                .append("svg")
                .attr('width', this.width + this.margins.left + this.margins.right)
                .attr('height', this.height + this.margins.top + this.margins.bottom)
                .call(this.responsivefy)
                .append('g')
                .attr('transform', `translate(${this.margins.left},  ${this.margins.top})`)


}
setUpAxes() {
    const [xMin, xMax] =  [d3.min(this.stockData, row => row.date), d3.max(this.stockData, row => row.date)]
    const [yMin, yMax] =  [d3.min(this.stockData, row => row.close), d3.max(this.stockData, row => row.close)]
    const xScale = d3.scaleTime().domain([xMin, xMax]).range([0, this.width])
    const yScale = d3.scaleLinear().domain([yMin - 10, yMax]).range([this.height, 0])
    this.svg.append('g').attr('id', 'xAxis').attr('transform', `translate(0, ${this.height})`).call(d3.axisBottom(xScale))
    this.svg.append('g').attr('id', 'yAxis').attr('transform', `translate(${this.width}, 0)`).call(d3.axisLeft(yScale))
    return [xScale, yScale]
}
drawLine(xScale, yScale) {
  const line = d3.line().x(d => xScale(d['date'])).y(d => yScale(d['close']))
  this.svg.append('path').data([this.stockData]).style('fill', 'none').attr('id', 'priceChart').attr('stroke', 'steelblue').attr('stroke-width', '1.5').attr('d', line)
}
renderVolumeChart(xScale) {
  const volumes = this.stockData.filter(row => row.hasOwnProperty('volume') && row.volume !== null && row.volume > 0)
  const [yMin, yMax] = [d3.min(volumes, row => row.volume), d3.max(volumes, row => row.volume)]
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([this.height, 0])
  this.svg.selectAll().data(volumes).enter().append('rect').attr('x', d => xScale(d['date'])).attr('y', d => yScale(d['volume'])).attr('fill', 
    (d, i) => {
      if(i === 0 ){
        return '#03a678'
      }else {
        return volumes[i - 1].close > d.close ? '#c0392b' : '#03a678'; 
      }
  }).attr('width', 1).attr('height', d => this.height - yScale(d['volume']))
  
}
getStockData(stock: string = null) {

  return this.stockService.getStockData(stock, "US")
    .pipe(map((data) => {
        if(data  && data['prices']) {
          const prices: any[] = data['prices']
          const cleanData: StockRow[] = []
          prices.forEach((row: any) => {
            if(row.hasOwnProperty("close")) {
              cleanData.push({
                close: row.close,
                date: new Date(row.date * 1000),
                adjclose: row.adjclose || 0,
                open: row.open || 0,
                high: row.high || 0,
       
                low: row.low || 0,
                volume: row.volume || 0
              })
            }
          })
          return cleanData
        }else {
          return []
        }

    }))
  

}

}
