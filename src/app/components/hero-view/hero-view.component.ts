import { Component, OnInit} from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';



@Component({
  selector: 'hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.scss']
})
export class HeroViewComponent implements OnInit{
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private locate: Location,
    private heroService: HeroService
  ){}
  

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(){
    this.locate.back();
  }
  
  ngOnInit(): void {
    this.getHero();
  }
}
