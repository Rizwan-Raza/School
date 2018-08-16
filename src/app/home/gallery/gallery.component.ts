import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  figures = [
    "assets/img/school/1.jpg",
    "assets/img/school/2.jpg",
    "assets/img/school/3.jpg",
    "assets/img/school/4.jpg"
  ];
  constructor() { }

  ngOnInit() {
  }

}
