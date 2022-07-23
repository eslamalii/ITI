import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  @ViewChild('text') divText!: ElementRef;

  personList = [
    { name: 'Douglas Pace', age: 35, country: 'MARS' },
    { name: 'Mcleod Mueller', age: 32, country: 'USA' },
    { name: 'Day Meyers', age: 21, country: 'HK' },
    { name: 'Aguirre Ellis', age: 34, country: 'UK' },
    { name: 'Cook Tyson', age: 32, country: 'USA' },
  ];

  changeText(text: any): void {
    (this.divText.nativeElement as HTMLDivElement).innerHTML = text;
  }

  constructor() {}

  ngOnInit(): void {}
}
