//Constants
import * as action_types from './constants';

const initialState = {
  reports: [],
  projects: [],
  gateways: [],
  records: [],
  loading: false,
  drawer_menu: false,
  menu: false,
};
export default (state = initialState, action) => {
  const { type, data, records } = action;
  switch (type) {
    case action_types.FILTER_REPORTS:
      return { ...state, reports: data, records, loading: false };
    case action_types.FETCH_PROJECTS:
      return { ...state, projects: data };
    case action_types.FETCH_GATEWAYS:
      return { ...state, gateways: data };
    case action_types.LOADING:
      return { ...state, loading: data };
    case action_types.DRAWER_MENU:
      return { ...state, drawer_menu: data };
    case action_types.MENU_STAT:
      return { ...state, menu: data };
    default:
      return state;
  }
};
