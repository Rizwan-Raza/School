import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team = [
    {image: "assets/img/avatar/lg/1.jpg", name: "Md. Salim", profession: "Director", description: "An B.Ed qualified staff. For further details contact us or visit us at J.B.U. Academy", facebook: '', twitter: '', googlePlus: '', linkedin: ''},
    {image: "assets/img/avatar/lg/2.jpg", name: "G. Sharma", profession: "Vice Chancellor", description: "An B.Ed qualified staff. For further details contact us or visit us at J.B.U. Academy", facebook: '', twitter: '', googlePlus: '', linkedin: ''},
    {image: "assets/img/avatar/lg/3.jpg", name: "Shahbaz Alam", profession: "Principal", description: "An B.Ed qualified staff. For further details, mail him on shahbazalam60699@gmail.com", facebook: '', twitter: '', googlePlus: '', linkedin: ''},
    {image: "assets/img/avatar/lg/4.jpg", name: "Staff of J.B.U.A", profession: "Teachers at J.B.U.A", description: "An B.Ed qualified staff. For further details contact us or visit us at J.B.U. Academy", facebook: '', twitter: '', googlePlus: '', linkedin: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
