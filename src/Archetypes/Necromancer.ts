import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _numberInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._numberInstances += 1;
    this._energy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._numberInstances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}