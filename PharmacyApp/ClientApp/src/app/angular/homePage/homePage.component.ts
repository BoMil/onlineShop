import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '../_interfaces/carouselItem';
import { IHero } from 'src/app/model/hero';
import { HeroService } from '../hero.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent implements OnInit {
    public heroes: IHero[];
    public heroesObj$: BehaviorSubject<IHero[]>;

    slidesData: ICarouselItem[] = [
        { image: '../../assets/imgs/blur-box-capsules.jpg', description: 'This is description 1' },
        { image: '../../assets/imgs/bottle-with-cork-lid.jpg', description: 'This is description 2' },
        { image: '../../assets/imgs/adorable-baby-beautiful-bed.jpg', description: 'This is description 3' },
        { image: '../../assets/imgs/woman-holding-pair-of-red-shoes.jpg', description: 'This is description 4' },
        { image: '../../assets/imgs/alternative-background-color-cooking.jpg' },
        { image: '../../assets/imgs/blue-tape-measuring-on-clear-glass-square-weighing-scale.jpg' },
        { image: '../../assets/imgs/medication-pills-isolated-on-yellow-background.jpg' },
    ];

    /**
    *   Determine if section with user recensions is visible or not
    */
    isParalaxVisible = false;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes$().subscribe((res: IHero[]) => {
            this.heroes = res;
        });
        this.heroesObj$ = this.heroService.getHeroes$();
        this.initHeroes();
    }

    addAge(heroId: number) {
        this.heroService.updateHeroAge(heroId, this.heroes[heroId].age + 1);
    }

    addHero() {
        this.heroService.addHeroes({name: 'Afrodita', age: 23});
    }

    initHeroes() {
        this.heroService.addHeroes({name: 'Zeus', age: 88});
        this.heroService.addHeroes({name: 'Poseidon', age: 46});
    }
}
