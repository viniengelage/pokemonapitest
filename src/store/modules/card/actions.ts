import { IAttackProps, ICardProps } from 'types/card';

export function selectCardAttack(attack: IAttackProps) {
  return {
    type: 'SELECT_CARD_ATTACK',
    payload: {
      attack,
    },
  };
}

export function addCardsToList(cards: ICardProps[]) {
  return {
    type: 'ADD_CARDS_TO_LIST',
    payload: {
      cards,
    },
  };
}
