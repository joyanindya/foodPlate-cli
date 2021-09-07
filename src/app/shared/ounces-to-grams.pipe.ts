import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ouncesToGrams'
})
export class OuncesToGramsPipe implements PipeTransform {

  transform(ounces: number): number {
    const MULTIPLIER: number = 28.35;
    return ounces * MULTIPLIER; }

}
