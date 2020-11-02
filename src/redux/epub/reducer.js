import { initialState } from 'screens/EPub/controllers/constants/init-states';
import {
  SET_ERROR,
  SET_VIEW,
  SET_MEDIA,
  SET_EPUB,
  SET_CHAPTERS,
  SET_CURR_CH_IDX,
  SET_SAVED,
  SET_FOLDED_IDS,
  SET_NAV_ID,
  SET_SHOW_NAV,
  SET_IMG_PICKER_DATA,
  SET_PLAYER_DATA,
  SET_SHOW_PREVIEW,
  SET_SHOW_FILE_SETTINGS,
  SET_SHOW_PREF_SETTINGS,
  SET_SHOW_SHORTCUTS,
  RESET_STATES
} from './action.types';

const epubReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case SET_ERROR:
      return { ...state, error: value };
    case SET_VIEW:
      return {
        ...state,
        view: value,
        showNav: true,
        showPreview: false,
        // navId: null,
        // currChIndex: 0
      };
    case SET_MEDIA:
      return { ...state, media: value };

    case SET_EPUB:
      return { ...state, epub: value };
    case SET_CHAPTERS:
      return { ...state, chapters: value };
    case SET_CURR_CH_IDX:
      return { ...state, currChIndex: value };
    case SET_FOLDED_IDS:
      return { ...state, foldedIds: value };
    case SET_SAVED:
      return { ...state, saved: value };

    case SET_NAV_ID:
      return { ...state, navId: value };
    case SET_SHOW_NAV:
      return { ...state, showNav: value };

    case SET_IMG_PICKER_DATA:
      return { ...state, imgPickerData: value };
    case SET_PLAYER_DATA:
      return { ...state, playerData: value };
    case SET_SHOW_PREVIEW:
      return { ...state, showPreview: value };
    case SET_SHOW_FILE_SETTINGS:
      return { ...state, showFileSettings: value };
    case SET_SHOW_PREF_SETTINGS:
      return { ...state, showPrefSettings: value };
    case SET_SHOW_SHORTCUTS:
      return { ...state, showShortcuts: value };

    case RESET_STATES:
      return initialState;

    default:
      return state;
  }
};

export default epubReducer;
