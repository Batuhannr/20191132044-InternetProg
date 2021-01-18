export class KeyValuePipeComponent {
    object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
    map = new Map([[2, 'foo'], [1, 'bar']]);
  }