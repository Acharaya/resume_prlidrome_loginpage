import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-que1',
  templateUrl: './que1.page.html',
  styleUrls: ['./que1.page.scss'],
})
export class Que1Page implements OnInit {
  constructor() { }
  data=[{
    name:'aryan',
    phone:'65211254232',
    email:'aryantiwary567@gamil.com',
    address:'lodna bazar',
    qualification:'bca',
    hobbies:'play cricket',
    skills:'programming'
  }]
  ngOnInit() {
  }

}
