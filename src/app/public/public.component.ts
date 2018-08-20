import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})

export class PublicComponent implements OnInit {

  posts: Object

  constructor(private data:DataService) {}

  ngOnInit() {

  }

}
