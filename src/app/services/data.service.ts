import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  // Get 500 Pokemon from API
  getPokemon() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=500`);
  }
}
