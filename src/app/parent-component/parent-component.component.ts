import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements AfterViewInit {

  receivedMessage: any = null;

  sendMessageToChild: any;

  constructor(
    private element:ElementRef,
    private render:Renderer2
    ){}

  @ViewChild('helloWorld') message: ChildComponentComponent; // or @ViewChild('helloWorld') message: any;

  // messageFromChild(event: any){
  //   this.receivedMessage = event;
  // }

  ngAfterViewInit(){
    // console.log(this.message);
  }

  messageFromChild(){
    this.receivedMessage = "Hello Parent.";
  }

  sendToChild(){
    this.sendMessageToChild = "Hello Child.";
  }

  sayHelloToChild(){
    this.message.helloWorld('Hello World!');
  }

  sayJustHello(){
    this.message.helloWorld();
  }

  helloKid(){
    alert("Hello Kid.");
  }

  sayHelloKid(){
    this.message.helloUncle();
  }
}
