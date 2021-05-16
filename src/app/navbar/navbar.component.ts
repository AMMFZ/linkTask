import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('.navbar-brand i.fa').click(function(){
        $('.navbar-brand').toggleClass('active')
        $('.menu').toggleClass('active');
      });

      $('.navbar-nav .fa-search').click(function(){
        $('.navbar-nav input').toggleClass('active');
      })
    })
  }

}
