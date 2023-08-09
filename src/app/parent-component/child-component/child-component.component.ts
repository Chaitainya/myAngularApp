import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';
import { ParentComponentComponent } from '../parent-component.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges {

  @Output() sendMessageToParent = new EventEmitter;
  @Input() messageFromParent: any;

  constructor(private parent:ParentComponentComponent){}

  ngOnInit(){
    console.log(this.parent);
  }

  ngOnChanges(){
  }

  sendToParent(){
    // this.sendMessageToParent.emit("Hello Parent.");
    this.sendMessageToParent.emit();
  }

  helloWorld(message?: any){
    if(message) alert(message);
    else alert("Hello!");
  }

  sayHelloPappa(){
    this.parent.helloKid();
  }

  helloUncle(){
    alert("Hello Uncle.");
  }
}
