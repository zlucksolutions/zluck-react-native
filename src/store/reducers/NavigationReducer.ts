// import { StackActions } from '@react-navigation/native';
import * as navigation from '../../navigation/ReduxNavigation';
import * as types from '../types/detailsType';

const detailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.GO_TO_DETAILS:
      navigation.navigate('Details'); //  or navigation.dispatch(StackActions.push('Details'));
      break;
    default:
      break;
  }
  return navigation.getRootState();
};

export default detailsReducer;
