import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 6, name: 'Strogonoffo' },
      { id: 7, name: 'Sabado Animado' },
      { id: 8, name: 'Cabeça de Lampada' },
      { id: 9, name: 'Cavalo Preto' },
      { id: 10, name: 'SuperCar' },
      { id: 11, name: 'Batmilson' },
      { id: 12, name: 'Dr. Oito Braços' },
      { id: 13, name: 'Bombasticamente' },
      { id: 14, name: 'Celabreso' },
      { id: 15, name: 'Bumbum Granada' },
      { id: 16, name: 'Mendigo Supremo' },
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
