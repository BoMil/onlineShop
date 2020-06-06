import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHero } from '../model/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ClientApp';
    public heroesObj$: BehaviorSubject<IHero[]>;
    public heroes: IHero[];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {

        // this.heroService.getHeroes$().subscribe((res: IHero[]) => {
        //     this.heroes = res;
        // });

        // this.heroesObj$ = this.heroService.getHeroes$();
        // this.initHeroes();
    }

    initHeroes() {
        this.heroService.addHeroes({name: 'Zeus', age: 88});
        this.heroService.addHeroes({name: 'Poseidon', age: 46});
    }
}
