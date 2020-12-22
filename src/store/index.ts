import { StoreManager } from '@mcfed/core'
import { createHashHistory } from 'history';
import { combineReducers, CombinedState } from 'redux';

const history = createHashHistory()

const makeRootReducer: CombinedState<any> = (asyncReducers: any) => {
  return combineReducers({
    ...asyncReducers
  })
}

const storeManager = new StoreManager(
  //@ts-ignore
  {},
  [],
  makeRootReducer
);

export default storeManager