import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  articId;
  articles;
  getAllArticles;
  articlesDetails;
  sort;
  just_three;

  constructor(public http:HttpClient, public actRout:ActivatedRoute) {
    this.articId = this.actRout.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.http.get("../../assets/newsapi.json",{observe:'body'}).subscribe(data => {
      this.articles = data;
      this.getAllArticles = this.articles.articles;
      this.articlesDetails = this.getAllArticles.filter(i=> i.id == this.articId);

      this.sort = this.getAllArticles.sort((a,b)=> {
        a.publishedAt - b.publishedAt
      });

      this.just_three = this.sort.splice(",",3);
    });
  }

  reloadPage(id){
    this.http.get("../../assets/newsapi.json",{observe:'body'}).subscribe(data => {
      this.articles = data;
      this.getAllArticles = this.articles.articles;
      this.articlesDetails = this.getAllArticles.filter(i=> i.id == id);

      this.sort = this.getAllArticles.sort((a,b)=> {
        a.publishedAt - b.publishedAt
      });

      this.just_three = this.sort.splice(",",3);
    });
  }

}
