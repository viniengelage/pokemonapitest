import { Reducer } from 'redux';
import produce from 'immer';

import { IAttackProps } from 'types/card';
import { ICard } from './types';

const INITIAL_STATE: ICard = {
  selectedAttack: {} as IAttackProps,
  cards: [],
};

const card: Reducer<ICard> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'SELECT_CARD_ATTACK': {
        const { attack } = action.payload;

        draft.selectedAttack = attack;

        return draft;
      }
      case 'ADD_CARDS_TO_LIST': {
        const { cards } = action.payload;

        draft.cards = cards;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default card;
