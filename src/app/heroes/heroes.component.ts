import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import {Hero} from '../hero';
import { HeroService } from "../hero.service";
import { JSONP_ERR_WRONG_METHOD } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

  add(heroName:string):void{
    heroName=heroName.trim();
    if(!heroName){
      return;
    }

    this.heroService.addHero({name:heroName} as Hero).subscribe(hero=>{this.heroes.push(hero)});
  }

  delete(hero:Hero):void{
    this.heroes = this.heroes.filter(h=>h!==hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
