import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {


  notices = [
    {date: "Auguet 16, 2018", notice: "As per Govt. directive, school will remain close on August 17, due to the sad demise of the former Prime Minister Shri Atal Bihari Vajpayee Ji."},
    {date: "August 14, 2018", notice: "There will be a functional programme on Independence Day, August 15, 2018. So there is no classes there."},
    {date: "July 17, 2018", notice: "Effective 1st July 2018 Attendance is Essential. All those who fail to submit application of leave will be fined Rs 50/- per day"},
    {date: "June 08, 2018", notice: "Those who have no id card should report in office immediatley. No entry will be given without id card. "},
  ];
  constructor() { }

  ngOnInit() {
  }

}
