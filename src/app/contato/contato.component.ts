import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {


  subjects: string[] = [
    'Sujestão',
    'contato',
    'outros'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
