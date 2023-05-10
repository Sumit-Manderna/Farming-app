import { Component } from '@angular/core';

@Component({
  selector: 'app-remedies',
  templateUrl: './remedies.component.html',
  styleUrls: ['./remedies.component.css']
})
export class RemediesComponent {
  cropList =[
    'Berseem','Blackgram','Chickpea','coffee','cotton','greengram','groundnuts','jute','lentile','maize','mustard','pea','pigeonpea','rice' ,'soybean','sugarcane','sunflower','tea','wheat',
  ];
  
  crop  = '' ;
}
