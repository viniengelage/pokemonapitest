import { IAttackProps, ICardProps } from 'types/card';

export interface ICard {
  cards: ICardProps[];
  selectedAttack: IAttackProps;
}
