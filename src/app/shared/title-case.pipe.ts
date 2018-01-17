import { Pipe, PipeTransform } from '@angular/core';

function titleCaseWord(word: string) {
  if (!word) { return word; }
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

@Pipe({
  name: 'pkmnTitleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) { return value; }
    return value.replace(/\w\S*/g, (word => titleCaseWord(word)));
  }

}
