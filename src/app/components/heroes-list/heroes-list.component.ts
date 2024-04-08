import { Component } from '@angular/core';
import { HEROES } from 'src/app/mock/mock-heroes';
import { Hero } from 'src/app/interfaces/hero';



@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  unSelectedHero(): void{
    this.selectedHero = undefined;
  }
}
