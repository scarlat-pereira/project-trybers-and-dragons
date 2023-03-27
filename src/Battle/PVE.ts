import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player1: Fighter,
    protected monsters: SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    this.monsters.forEach((player) => {
      while
      (this.player1.lifePoints !== -1 && player.lifePoints !== -1) {
        this.player1.attack(player);
        player.attack(this.player1);
      }
    });

    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}