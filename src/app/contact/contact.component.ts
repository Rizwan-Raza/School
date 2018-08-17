import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  email = "info.jbuacademy@gmail.com";
  tel = "+919631229621";
  ngOnInit() {
  }

}
