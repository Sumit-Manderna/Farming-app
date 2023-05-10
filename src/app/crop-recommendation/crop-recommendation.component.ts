import { Component } from '@angular/core';
import { UserData } from '../model/UserData';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-crop-recommendation',
  templateUrl: './crop-recommendation.component.html',
  styleUrls: ['./crop-recommendation.component.css']
})
export class CropRecommendationComponent {
  stateList = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Tamil Nadu',
    'Tripura',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Pondicherry',
  ]
  soilList = [
    'clay','clay & loamy','well drained','rich humus','high calcium and phosphorus','sandy & loamy','neutral',
    'organic','heavy','black cotton','deep','friable','slight acidic','moist','slight basic','light textured','alluvial','light & loamy','heavy & clay',
    'rich nitrogen','water_holding','uplands','friable & loamy','light','mixed'
  ]
  climateList = [
    'cool','tropical','subtropical','kharif','hot,dry','subtropical','hot','humid','hot(NorthIndia)','cool(SouthIndia)',
    'moist','rabi','rainy'
  ]

  crops = [
    { cropName: 'Wheat', rating: 4 },
    { cropName: 'Maize', rating: 3 },
    { cropName: 'Rice', rating: 5 },
    // Add more crops as needed
  ];

  inputData :UserData;

  constructor(){
    this.inputData = <UserData>{};
  }

  state = '';
  soil = '';
  city = '';
  temperature ?:number;
  climate =''
  rainfall ?:number;
  
  formSubmit(){
    console.log(this.inputData);
  }
  
}
