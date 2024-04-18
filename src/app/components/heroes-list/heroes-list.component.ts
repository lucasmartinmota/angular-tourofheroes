import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessagesService} from 'src/app/services/messages.service';



@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit{
  heroes: Hero[] =[];
  selectedHero?: Hero;
  deleteButtons: boolean = false;

  constructor(private heroService: HeroService, private messageService: MessagesService) {}

  showDeleteButtons(){
    this.deleteButtons = !this.deleteButtons;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
