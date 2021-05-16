import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  tarticles;
  myAllArticles;
  sort;
  sortingCase:boolean = false;

  constructor(public http:HttpClient) {
    this.load();
  }
  ngOnInit() {}

  load(){
    this.http.get("../../assets/newsapi.json",{observe:'body'}).subscribe(data => {
      this.tarticles = data;
      this.myAllArticles = this.tarticles.articles;
      this.sort = this.myAllArticles.sort((a:any,b:any)=> {
        a.publishedAt - b.publishedAt
      });
    });
  }
  chang_sortCase(){
    if(this.sortingCase === false){
      this.sortingCase = true;
      this.sortIt();
    }else{
      this.sortingCase = false;
      this.sortIt();
    }
  }


  sortIt(){
    if(this.sortingCase === false){
      this.sort = this.myAllArticles.sort((a,b)=> {
        a.publishedAt - b.publishedAt
      });
    }else{
      this.sort = this.myAllArticles.reverse((a,b)=> {
        a.publishedAt - b.publishedAt
      });
    }
  }

}
