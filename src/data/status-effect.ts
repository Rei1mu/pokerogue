import * as Utils from "../utils";
import i18next, { Localizable } from '../plugins/i18n';

export enum StatusEffect {
  NONE,
  POISON,
  TOXIC,
  PARALYSIS,
  SLEEP,
  FREEZE,
  BURN,
  FAINT
}

export class Status {
  public effect: StatusEffect;
  public turnCount: integer;
  public cureTurn: integer;

  constructor(effect: StatusEffect, turnCount: integer = 0, cureTurn?: integer) {
    this.effect = effect;
    this.turnCount = turnCount === undefined ? 0 : turnCount;
    this.cureTurn = cureTurn;
  }

  incrementTurn(): void {
    this.turnCount++;
  }

  isPostTurn(): boolean {
    return this.effect === StatusEffect.POISON || this.effect === StatusEffect.TOXIC || this.effect === StatusEffect.BURN;
  }
}

export function getStatusEffectObtainText(statusEffect: StatusEffect, sourceText?: string): string {
  const sourceClause = sourceText ? ` ${statusEffect !== StatusEffect.SLEEP ? 'by' : 'from'} ${sourceText}` : '';
  switch (statusEffect) {
    case StatusEffect.POISON:
      // return `\nwas poisoned${sourceClause}!`;
      return i18next.t(`statusEffect:was_poisoned`, { sourceClause: sourceClause })
    case StatusEffect.TOXIC:
      // return `\nwas badly poisoned${sourceClause}!`;
      return i18next.t(`statusEffect:was_badly_poisoned`, { sourceClause: sourceClause })
    case StatusEffect.PARALYSIS:
      // zh-cn paralyzed
      // return ` was paralyzed${sourceClause}!\nIt may be unable to move!`;
      return i18next.t(`statusEffect:was_paralyzed`, { sourceClause: sourceClause })
    case StatusEffect.SLEEP:
      // return `\nfell asleep${sourceClause}!`;
      return i18next.t(`statusEffect:fell_asleep`, { sourceClause: sourceClause })
    case StatusEffect.FREEZE:
      // return `\nwas frozen solid${sourceClause}!`;
      return i18next.t(`statusEffect:was_frozen_solid`, { sourceClause: sourceClause })
    case StatusEffect.BURN:
      // return `\nwas burned${sourceClause}!`;
      return i18next.t(`statusEffect:was_burned`, { sourceClause: sourceClause })
  }

  return '';
}

export function getStatusEffectActivationText(statusEffect: StatusEffect): string {
  switch (statusEffect) {
    case StatusEffect.POISON:
    case StatusEffect.TOXIC:
      return i18next.t(`statusEffect:is_hurt_by_poison`)
    // return ' is hurt\nby poison!';
    case StatusEffect.PARALYSIS:
      return i18next.t(`statusEffect:is_paralyzed_It_cant_move`)
    //   return ' is paralyzed!\nIt can\'t move!';
    case StatusEffect.SLEEP:
      return i18next.t(`statusEffect:is_fast_asleep`)
    //   return ' is fast asleep.';
    case StatusEffect.FREEZE:
      return i18next.t(`statusEffect:is_frozen_solid`)
    //   return ' is\nfrozen solid!';
    case StatusEffect.BURN:
      return i18next.t(`statusEffect:is_hurt_by_its_burn`)
    //   return ' is hurt\nby its burn!';
  }

  return '';
}

export function getStatusEffectOverlapText(statusEffect: StatusEffect): string {
  switch (statusEffect) {
    case StatusEffect.POISON:
    case StatusEffect.TOXIC:
      return i18next.t(`statusEffect:is_already_poisoned`)
      return ' is\nalready poisoned!';
    case StatusEffect.PARALYSIS:
      return i18next.t(`statusEffect:is_already_paralyzed`)
      return ' is\nalready paralyzed!';
    case StatusEffect.SLEEP:
      return i18next.t(`statusEffect:is_already_asleep`)
      return ' is\nalready asleep!';
    case StatusEffect.FREEZE:
      return i18next.t(`statusEffect:is_already_frozen`)
      return ' is\nalready frozen!';
    case StatusEffect.BURN:
      return i18next.t(`statusEffect:is_already_burned`)
      return ' is\nalready burned!';
  }

  return '';
}

export function getStatusEffectHealText(statusEffect: StatusEffect): string {
  switch (statusEffect) {
    case StatusEffect.POISON:
    case StatusEffect.TOXIC:
      return i18next.t(`statusEffect:"was_cured_of_its_poison`)
      return ' was\ncured of its poison!';
    case StatusEffect.PARALYSIS:
      return i18next.t(`statusEffect:was_healed_of_paralysis`)
      return ' was\nhealed of paralysis!';
    case StatusEffect.SLEEP:
      return i18next.t(`statusEffect:woke_up`)
      return ' woke up!';
    case StatusEffect.FREEZE:
      return i18next.t(`statusEffect:was_defrosted`)
      return ' was\ndefrosted!';
    case StatusEffect.BURN:
      return i18next.t(`statusEffect:was_healed_of_its_burn`)
      return ' was\nhealed of its burn!';
  }

  return '';
}

export function getStatusEffectDescriptor(statusEffect: StatusEffect): string {
  switch (statusEffect) {
    case StatusEffect.POISON:
    case StatusEffect.TOXIC:
      return i18next.t(`statusEffect:poisoning`)
      return 'poisoning';
    case StatusEffect.PARALYSIS:
      return i18next.t(`statusEffect:paralysis`)
      return 'paralysis';
    case StatusEffect.SLEEP:
      return i18next.t(`statusEffect:sleep`)
      return 'sleep';
    case StatusEffect.FREEZE:
      return i18next.t(`statusEffect:freezing`)
      return 'freezing';
    case StatusEffect.BURN:
      return i18next.t(`statusEffect:burn`)
      return 'burn';
  }
}

export function getStatusEffectCatchRateMultiplier(statusEffect: StatusEffect): number {
  switch (statusEffect) {
    case StatusEffect.POISON:
    case StatusEffect.TOXIC:
    case StatusEffect.PARALYSIS:
    case StatusEffect.BURN:
      return 1.5;
    case StatusEffect.SLEEP:
    case StatusEffect.FREEZE:
      return 2.5;
  }

  return 1;
}

/**
* Returns a random non-volatile StatusEffect
*/
export function generateRandomStatusEffect(): StatusEffect {
  return Utils.randIntRange(1, 6);
}

/**
* Returns a random non-volatile StatusEffect between the two provided
* @param statusEffectA The first StatusEffect
* @param statusEffectA The second StatusEffect
*/
export function getRandomStatusEffect(statusEffectA: StatusEffect, statusEffectB: StatusEffect): StatusEffect {
  if (statusEffectA === StatusEffect.NONE || statusEffectA === StatusEffect.FAINT) {
    return statusEffectB;
  }
  if (statusEffectB === StatusEffect.NONE || statusEffectB === StatusEffect.FAINT) {
    return statusEffectA;
  }

  return Utils.randIntRange(0, 2) ? statusEffectA : statusEffectB;
}

/**
* Returns a random non-volatile StatusEffect between the two provided
* @param statusA The first Status
* @param statusB The second Status
*/
export function getRandomStatus(statusA: Status, statusB: Status): Status {
  if (statusA === undefined || statusA.effect === StatusEffect.NONE || statusA.effect === StatusEffect.FAINT) {
    return statusB;
  }
  if (statusB === undefined || statusB.effect === StatusEffect.NONE || statusB.effect === StatusEffect.FAINT) {
    return statusA;
  }


  return Utils.randIntRange(0, 2) ? statusA : statusB;
}