import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @ViewChild('pReference') a:ElementRef;

  getP(ref: HTMLParagraphElement){ // HTMLParagraphElement || any
    console.log(ref);
  }

  viewElement(){
    console.log(this.a);
    this.a.nativeElement.innerHTML += "Hello";
  }
}
