import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  implements OnInit{
  name='yudi'
   message = [{data:'yudi',id:'123243543'},{data:'test',id:'371256'}];
   ngOnInit() {
     //this.message.push({data:'gdaj',id:'6493287'})
   }
}
