import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'J.B.U. Academy';
  email = "info.jbuacademy@gmail.com";
  tel = "+919631229621";

  socialUrls = [
    {icon: "facebook", url: "https://www.facebook.com"},
    {icon: "twitter", url: "https://www.twitter.com"},
    {icon: "linkedin", url: "https://www.linkedin.com"}
  ];
}
