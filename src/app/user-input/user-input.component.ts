import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  constructor(private http: HttpClient){

  }
  showButton = true;

  createGraph(){
    this.showButton = false;
    this.http.get('http://127.0.0.1:8000/makeKG').subscribe(response => {
      console.log(response);
    });
    
  }
}
