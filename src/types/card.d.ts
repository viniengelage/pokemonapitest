export interface ICardProps {
  id: string;
  name: string;
  types: string[];
  attacks: IAttackProps[];
  weaknesses: IWeaknessProps[];
  resistances: IResistanceProps[];
  images: IImagesProps;
}

export interface IAttackProps {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface IWeaknessProps {
  type: string;
  value: string;
}

export interface IResistanceProps {
  type: string;
  value: string;
}

export interface IImagesProps {
  small: string;
  large: string;
}
