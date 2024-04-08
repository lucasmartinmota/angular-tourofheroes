import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock/mock-heroes';
import { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService){}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
