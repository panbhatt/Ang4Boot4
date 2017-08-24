import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app is working';
  content = "First thing";
  private upper : String = "";
  private lower : String = "";
  

  catchMe(event){
    this.upper = event.target.value.toUpperCase();
    this.lower = event.target.value.toLowerCase();

  }


}
