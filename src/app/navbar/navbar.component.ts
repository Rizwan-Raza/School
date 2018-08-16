import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title;

  navLinks = [
    {link: '', text: 'Home'},
    {link: 'about', text: 'About'},
    {link: 'admission', text: 'Admission'},
    {link: 'sp-vc', text: 'VC'},
    {link: 'contact', text: 'Contact'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
