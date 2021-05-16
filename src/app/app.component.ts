import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'newApp';

  constructor(){}

  ngOnInit(){

    // testing jquery
    $(document).ready(function(){
      $('.container .row .col .clickme').click(function(e){
        $('.row .col .show-result .result').html('jquery work !');
      })
    })

  }

}
