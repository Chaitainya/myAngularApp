import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('helloWorld', { static : true }) h1: any;

  ngOnInit(): void {
    console.log("ngOnInit", this.h1); // if { static : true } else undefined
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit", this.h1);
  }
}
