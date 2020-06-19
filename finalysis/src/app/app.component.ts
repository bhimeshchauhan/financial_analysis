import { Component, Renderer2, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private renderer:Renderer2, 
    private elref:ElementRef
  ) {}
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(_ => { 
          let childRouteSnapshot = this.route.firstChild.snapshot;
          let url = childRouteSnapshot.data.bg;
          let $el = this.elref.nativeElement.querySelector('.content');
          this.renderer.setStyle($el,
            'background-image', 'url(/assets/images/' + url + '.png)');
      })
  }
  title = 'finalysis';
}
