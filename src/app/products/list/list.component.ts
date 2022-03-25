import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  genres: {id: number, desc: string}[] = []
  categorys: {id: number, desc: string}[] = []
  sortItens: {id: number, desc: string}[] = []

  card: string[] = ['','','','','','','','','','','','','','','','','','','','','']

  constructor() { }

  ngOnInit(): void {
    this.sortItens = [
      {id: 1, desc: 'Lançamentos'},
      {id: 2, desc: 'Maior Desconto'},
      {id: 3, desc: 'Mais Vendidos'},
      {id: 4, desc: 'Menor Preço'},
      {id: 5, desc: 'Maior Preço'}
    ]

    this.genres = [
      {id: 1, desc: 'Ação e aventura'},
      {id: 2, desc: 'Infantil'},
      {id: 3, desc: 'Clássicos'},
      {id: 4, desc: 'Cultural e étnico'},
      {id: 5, desc: 'Fantasia'},
      {id: 6, desc: 'Ficção histórica'},
      {id: 7, desc: 'Humor e comédia'},
      {id: 8, desc: 'Mistério e crime'},
      {id: 9, desc: 'Poesia'},
      {id: 10, desc: 'Romance'},
      {id: 11, desc: 'Ficção científica'},
      {id: 12, desc: 'Contos'},
      {id: 13, desc: 'Temáticas e motivações'},
      {id: 14, desc: 'Thriller e Suspense'},
      {id: 15, desc: 'Ficção Feminina'},
      {id: 16, desc: 'Jovem adulto'}
    ]

    this.categorys = [
      {id: 1, desc: 'Mangás'},
      {id: 2, desc: 'Quadrinhos'},
      {id: 3, desc: 'Hqs'},
      {id: 4, desc: 'Literatura Estrangeira'},
      {id: 5, desc: 'Livros'},
      {id: 6, desc: 'Hqs'}
    ]
  }

}
