import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: any;
  showContent: boolean = false;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
      for (let i = 0; i < this.articles.length; i++) {
        this.articles[i].id = i;
        //this.articles[i].showContent = false;
      }
      console.log(this.articles);
    });
  }

  onViewMore(articleId:string){
    //this.articles[articleId].showContent = !this.articles[articleId].showContent;
    window.open(this.articles[articleId].url,'_blank');
  }

}
