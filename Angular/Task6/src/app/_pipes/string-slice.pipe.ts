import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSlice',
})
export class StringSlicePipe implements PipeTransform {
  transform(value: string, args: number): string {
    return value.slice(0, args);
  }
}
