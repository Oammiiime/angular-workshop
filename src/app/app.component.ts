import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular-workshop';
  result = "...";
  data = ""
  username = ""

  doSth() {
    console.log("Clicked ...");
    this.result = "Change from clicked !!";
  }

  onPress(event: any) {
    console.log(event.target.value);
    this.result = event.target.value;
  }
}
