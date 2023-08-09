import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css'],
})
export class AsyncAwaitComponent implements OnInit {

  ngOnInit(){
    this.getValueWithAsync();
  }

  async getValueWithAsync() {
    const value = <number>await this.resolveAfter2Seconds(10);
    console.log(`async result: ${value}`);
  }

  resolveAfter2Seconds(x: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 10000);
    });
  }
}
