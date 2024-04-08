import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.scss']
})
export class HeroViewComponent {
  @Input() hero!: Hero;


}
