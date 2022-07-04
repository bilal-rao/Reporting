import * as action_types from './constants';
import { postReports, getProjects, getGateWays } from './services';
import { listGenerator, recordFilterBy, getRecordLabel } from '../../../../utils/Helpers';
import store from '../../../../redux/store/index';

export const updateMenu = (stat) => {
  return (dispatch) => {
    dispatch({
      type: action_types.MENU_STAT,
      data: stat,
    });
  };
};

export const updateDrawerMenu = (bool) => {
  return (dispatch) => {
    dispatch({
      type: action_types.DRAWER_MENU,
      data: bool,
    });
  };
};

export const filterReports = (form) => {
  return (dispatch) => {
    dispatch({
      type: action_types.LOADING,
      data: true,
    });
    return postReports(form).then((reports) => {
      let projectList = Object.keys(listGenerator(reports.data.data, recordFilterBy(form)));
      let records = projectList.map((values) => ({
        code: values,
        label: getRecordLabel(form, values, store.getState().global.projects, store.getState().global.gateways),
        list: reports.data.data.filter((val) => values == val[recordFilterBy(form)]).sort((a,b) => (new Date(b.created).getTime() - new Date(a.created).getTime())),
      }));

      dispatch({
        type: action_types.FILTER_REPORTS,
        data: reports.data.data,
        records,
      });
    });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: action_types.FETCH_USERS,
    });
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    return getProjects().then((projects) => {
      projects.data.data = [{ projectId: '', name: 'All Projects' }, ...projects.data.data];
      const transformedProjects = projects.data.data.map((item) => {
        return {
          value: item.projectId,
          label: item.name,
        };
      });
      dispatch({
        type: action_types.FETCH_PROJECTS,
        data: transformedProjects,
      });
    });
  };
};

export const fetchGateWays = () => {
  return (dispatch) => {
    return getGateWays().then((gateways) => {
      gateways.data.data = [{ gatewayId: '', name: 'All Gateways' }, ...gateways.data.data];
      const transformedGateWays = gateways.data.data.map((item) => {
        return {
          value: item.gatewayId,
          label: item.name,
        };
      });
      dispatch({
        type: action_types.FETCH_GATEWAYS,
        data: transformedGateWays,
      });
    });
  };
};
