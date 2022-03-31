import { Component, OnInit } from '@angular/core';
declare var google: any

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  options: any;

  overlays!: any[];

  subjects: string[] = [
    'Sujestão',
    'contato',
    'outros'
  ]

  constructor() { }

  ngOnInit(): void {
    this.options = {
      center: {lat: -14.42982184301119, lng: -54.05045140823186},
      zoom: 15
  };

  this.overlays = [
      new google.maps.Marker({position: {lat: -14.42982184301119, lng: -54.05045140823186}, title:"Konyaalti"}),
  ];

  }

}
