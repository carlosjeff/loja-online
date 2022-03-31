import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: string[] = ['','','','','','','','']
  page:number = 0


  constructor(private ds: DataService) {

  }

  ngOnInit(): void {
    	// this.ds.cep().subscribe(data => {
      //   console.log('teste',data)
      // })
  }


}
