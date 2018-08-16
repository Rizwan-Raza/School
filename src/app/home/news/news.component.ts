import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses = [
    {date: "Aug 13, 2018", title: "School Opening Timing", news: `School classes is happened Monday to Saturday from 8:00 A.M to 2:00 P.M. Any holiday, functional programme or half-day will be discussed earlier to that event.`},
    {date: "Aug 14, 2018", title: "School Teaching Medium", news: `School subjects are depends on the standard for that class plus in every standard there is a class available for Engilsh as well as Urdu language.`},
    {date: "Aug 13, 2018", title: "Best Student Spots in Khajurha, Bhore", news: `J.B.U Academy is an English Medium School and is considered to be Best School in Khajurha, Bhore, Gopalganj, Bihar.`},
  ];
  constructor() { }

  ngOnInit() {
  }

}
