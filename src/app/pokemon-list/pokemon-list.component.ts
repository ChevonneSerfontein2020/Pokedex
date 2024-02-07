import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { response } from 'express';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemon: any[] = [];
  httpClient = inject(HttpClient);
  constructor(private dataService: DataService) {}

  ngOnInit(): void { 
    this.fetchData();
  }

  fetchData(){
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=100').subscribe((pokemon) => 
    {
      console.log(pokemon);
    })
  }
}
