import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles;
  myAllArticles;
  homeArticles;
  sort;

  constructor(public http:HttpClient) {
  }

  ngOnInit() {
    this.http.get("../../assets/newsapi.json",{observe:'body'}).subscribe(data => {
      this.articles = data;
      this.myAllArticles = this.articles.articles;
      this.homeArticles = this.myAllArticles.filter(i=> i.showOnHomepage === true);
      this.sort = this.homeArticles.sort((a,b)=> {
        a.publishedAt - b.publishedAt
      });
    });
  }

}
