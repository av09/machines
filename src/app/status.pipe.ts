import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: string): string {
    let color: string;
    switch (status) {
      case 'running':
        color = '#39fc03';
        break;
      case 'idle':
        color = '#aaa';
        break;
      case 'finished':
        color = '#1b1c1b';
        break;
      case 'errored':
        color = '#bd131b';
        break;
      case 'repaired':
        color = '#fce303';
        break;
      default:
        color = '#aaa';
    }

    return color;
  }

}
