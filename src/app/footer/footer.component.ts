import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() title;
  @Input() email;
  @Input() tel;
  @Input() socialUrls;

  quickLinks = [
    {url: 'about', text: 'About Us'},
    {url: 'admission', text: 'Admissions'},
    {url: 'sp-vc', text: 'V. Chancellor'},
    {url: 'contact', text: 'Contact Us'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
