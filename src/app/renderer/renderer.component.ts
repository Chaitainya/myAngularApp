import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit, AfterViewInit {

  @ViewChild('main') mainDiv:ElementRef;

  constructor(private element:ElementRef, private render:Renderer2){}

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.createElement();
  }

  createElement(){

    this.render.setStyle(this.mainDiv.nativeElement, "display", "flex");
    
    let childOne = this.render.createElement("div");
    let childTwo = this.render.createElement("div")
    let contentOneChild = this.render.createText("Hello One!");
    let contentTwoChild = this.render.createText("Hello Two!");

    this.render.appendChild(childOne, contentOneChild);
    this.render.setStyle(childOne, "background-color", "red");
    this.render.setAttribute(childOne, "class", "text-white");

    this.render.appendChild(childTwo, contentTwoChild);
    this.render.setStyle(childTwo, "background-color", "green");
    this.render.setAttribute(childTwo, "class", "text-white");

    this.render.appendChild(this.mainDiv.nativeElement, childOne);
    this.render.appendChild(this.mainDiv.nativeElement, childTwo);
  }
}
