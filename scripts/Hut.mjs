import { Place } from './Place.mjs';
class Hut extends Place {
  constructor() {
    super('Hut', '', [], [], function(bg_uri) { return ''; })
  }
}
export { Hut };
