import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: String

  constructor( private router:Router) {
    router.events.subscribe( (e: NavigationEnd) => {
      if (e instanceof NavigationEnd) {
      this.currentUrl = e.url;
      }
    })

    

   }

  ngOnInit() {
  }

}
