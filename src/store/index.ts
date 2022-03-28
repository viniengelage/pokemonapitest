import { createStore } from 'redux';
import { ICard } from './modules/card/types';

import rootReducer from './modules/rootReducer';

export interface IState {
  card: ICard;
}

const store = createStore(rootReducer);

export default store;
