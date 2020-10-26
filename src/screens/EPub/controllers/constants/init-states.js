import { ARRAY_INIT } from 'utils/constants';
import Constants from './EPubConstants';

export const initialState = {
  error: null,
  view: Constants.EpbDefaultView,
  epub: null,
  chapters: ARRAY_INIT,
  currChIndex: 0,
  saved: Constants.EpbSaved,
  navId: null,
  showNav: true,
  playerData: null
};