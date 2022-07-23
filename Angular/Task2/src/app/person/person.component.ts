import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @ContentChildren('country') countryElemnts!: QueryList<ElementRef>;
  @ContentChild('age') ageElements!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.countryElemnts.forEach((elm) => {
      (elm.nativeElement as HTMLParagraphElement).style.color = 'red';
    });

    (this.ageElements.nativeElement as HTMLDListElement).style.backgroundColor =
      'green';
    (this.ageElements.nativeElement as HTMLDListElement).style.color = 'white';
  }
}
