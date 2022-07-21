import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  img: string =
    'http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png';
  constructor() {}

  ngOnInit(): void {}
}
