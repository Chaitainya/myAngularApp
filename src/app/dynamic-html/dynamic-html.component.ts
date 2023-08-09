import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dynamic-html',
  templateUrl: './dynamic-html.component.html',
  styleUrls: ['./dynamic-html.component.css']
})
export class DynamicHtmlComponent implements AfterViewInit {

  // VIEW CHILD WAY
  @ViewChild('one') diana:ElementRef;

  constructor(
    // CLASS WAY
    private elementRef:ElementRef,
  ){}

  ngAfterViewInit() {

    // VIEW CHILD WAY
    this.diana.nativeElement.insertAdjacentHTML('beforeend', `
      <div style="display: flex">
          <input type="text" placeholder="Enter your name"
            style="height: 2rem; border-radius: 0.3rem 0 0 0.3rem; outline: none; border: 1px solid green;">

          <button type="button" class="find"
            style="color: #fff; background-color: green; border: none; border-radius: 0 0.3rem 0.3rem 0; padding: 0.5rem 1rem; cursor: pointer;">
            Find
          </button>
      </div>
    `);

    // CLASS WAY
    var d1 = this.elementRef.nativeElement.querySelector('.one');
    d1.insertAdjacentHTML('beforeend', `
      <div style="display: flex">
          <input type="text" placeholder="Enter your name"
            style="height: 2rem; border-radius: 0.3rem 0 0 0.3rem; outline: none; border: 1px solid green;">

          <button type="button" class="find"
            style="color: #fff; background-color: green; border: none; border-radius: 0 0.3rem 0.3rem 0; padding: 0.5rem 1rem; cursor: pointer;">
            Find
          </button>
      </div>
    `);

  }
}
