import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      interval:4000
    });
    $('.carousel-control-prev').click(function() {
      $('.carousel').carousel('prev');
    });
    $('.carousel-control-next').click(function() {
      $('.carousel').carousel('next');
    });
  }
}
