import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLength',
})
export class ContentLengthPipe implements PipeTransform {
  transform(value: any, end: number): any {
    if (value.length == end) return value;
    else if (value.length > 500) return value.substr(0, end) + '...';
  }
}
