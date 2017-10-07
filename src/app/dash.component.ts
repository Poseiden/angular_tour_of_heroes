import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashComponent implements OnInit {
    topFourHeroes: Hero[] = [];

    ngOnInit(): void {
      this.heroService.getHeroesSlowly().then(resultArray => {
        this.topFourHeroes = resultArray.slice(1, 5);
      });
    }
    constructor(private heroService: HeroService) {

    }

}
