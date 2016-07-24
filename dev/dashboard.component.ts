import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./Hero";
import { Router} from "@angular/router";

@Component({
  selector: 'my-dashboard',
  templateUrl:'app/dashboard.component.html',
  styleUrls: ['app/src/css/dashboard.component.css']

})
export class DashboardComponent implements OnInit{
  heroes:Hero[]=[];
  constructor(private route:Router,private heroService:HeroService){

  }
  ngOnInit():any {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5))
  }
  gotoDetail(hero:Hero){
    let link = ['/detail', hero.id];
    this.route.navigate(link)
  }

}
