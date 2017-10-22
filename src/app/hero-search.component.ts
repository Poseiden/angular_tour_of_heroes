import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';
import { OnInit, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService, private router: Router) {
  }

  search(searchTerm: string) {
    this.searchTerms.next(searchTerm);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        return term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]);
      })
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
