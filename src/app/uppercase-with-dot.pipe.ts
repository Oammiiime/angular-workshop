import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseWithDot'
})
export class UppercaseWithDotPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return value.toUpperCase()+(args[0] != undefined ? args[0] : '.')
  }

}
