import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { response } from 'express';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  constructor(
    private dataService: DataService
    ) {}

  ngOnInit(): void {
    this.dataService.getPokemon() // observable
    .subscribe((response: any) => {
      console.log(response);
    });
  }
}
