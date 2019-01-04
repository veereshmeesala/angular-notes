import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit {

  constructor() { }
  code :string = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }`;

  ngOnInit() {
  }

}
