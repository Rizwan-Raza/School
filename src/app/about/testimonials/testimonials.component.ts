import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {avatar: "assets/img/avatar/4.jpg", name: "Rizwan Raza", profession: "Web Developer",
    review: `As I am the Web Developer of J.B.U. 
    Academy so I can say there much better features available in this school than other in this locality.`},
    {avatar: "assets/img/avatar/6.jpg", name: "Rex Terminous", profession: "Web Developer",
    review: `J.B.U. Academy is an English Medium, Co-Ed School and is considered to be Best School in Khajurha, Bhore, Gopalganj, Bihar.`}
  ];

  constructor() { }

  ngOnInit() {
  }

}
