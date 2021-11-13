class Monster {
  constructor(name, hp, max_hp) {
    this.name = name
    this.hp = hp
    this.max_hp = max_hp
  }
  takeDamage(damage) {
    this.hp = this.hp - damage
  }
  get isDead() {
    if (this.hp <= 0) {
      return true
    } else {
      return false
    }
  }
}
export Monster;
