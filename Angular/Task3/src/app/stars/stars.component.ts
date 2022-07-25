import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
  stars = [1, 2, 3, 4, 5];
  selectedStar = 0;
  @ViewChildren('starelem') starElement!: QueryList<ElementRef>;
  constructor() {}

  ngOnInit(): void {}

  setSelectedStar(star: number) {
    this.selectedStar = star;
  }
  addStar(star: number) {
    for (let index = 0; index < star; index++) {
      (
        this.starElement.get(index)?.nativeElement as HTMLLIElement
      ).classList.add('selected');
    }
  }
}
