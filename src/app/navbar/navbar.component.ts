import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title;
  expandable: boolean = false;
  navLinks = [
    {link: '', text: 'Home'},
    {link: 'about', text: 'About'},
    {link: 'admission', text: 'Admission'},
    {link: 'sp-vc', text: 'VC'},
    {link: 'contact', text: 'Contact'}
  ];
  constructor() { }

  ngOnInit() {
		this.onResize({target: window});
	}
  onResize(event) {
		const element = event.target.innerWidth;

		if (element < 480) {
			this.expandable = true;
		} else {
			this.expandable = false;
		}
	}

}
