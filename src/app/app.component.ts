import { Component , ViewChild} from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild(HelloComponent) hello : HelloComponent;

constructor() { }

  message:any;

  // ngAfterViewInit() {
  //   this.message = this.hello.message
  //   //console.log(this.message)
  // }

  test(){
    this.message = this.hello.message
    this.message.push({data:'gdaj',id:'6493287'})
    console.log(this.message.length)
    console.log(this.message)
  }

}
