import { Monster } from './Monster.mjs';
class GoldBeast extends Monster {
  constructor() {
    super("Gold Beast", 1_000_000, 1_000_000);
  }
}
export { GoldBeast };
