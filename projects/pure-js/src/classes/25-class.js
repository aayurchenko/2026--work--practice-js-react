
class Player {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
  }
}

class Enemy {
  constructor(type) {
    this.type = type;
    this.x = 10;
    this.y = 10;
  }
}

const movementMixin = {
  moveRight(distance) {
    this.x += distance;
  }
};

Object.assign(Player.prototype, movementMixin);
Object.assign(Enemy.prototype, movementMixin);

const player = new Player('Максим');
const enemy = new Enemy('Орк');

player.moveRight(5);
enemy.moveRight(3);