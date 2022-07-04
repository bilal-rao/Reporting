import moment from 'moment';
import { CURRENCY_TYPE } from './AppConstants';

const dateFormat = (date) => {
  const format = 'YYYY-MM-DD';
  return date ? moment(date).format(format) : '';
};

const nameGetter = (name, list) => {
  return list.filter((item) => item.value == name)[0].label;
};

const keyGenerator = () => {
  return Math.random().toString(36).substr(2, 5);
};

const titleGenerator = (form, projects, gateways) => {
  let title = '';
  if (form.projectId && !form.gatewayId) {
    title = `${nameGetter(form.projectId, projects)} | All gateways`;
  } else if (!form.projectId && form.gatewayId) {
    title = `All projects | ${nameGetter(form.gatewayId, gateways)}`;
  } else if (form.projectId && form.gatewayId) {
    title = `${nameGetter(form.projectId, projects)} | ${nameGetter(form.gatewayId, gateways)}`;
  } else {
    title = 'All projects | All gateways';
  }

  return title;
};

const insertItem = (arr, index, ...newItems) => [...arr.slice(0, index), ...newItems, ...arr.slice(index)];

const columnsToBeRendered = (form, gateways) => {
  let commonColumns = [
    {
      title: 'Date',
      dataIndex: 'created',
      render: (created) => moment(created, 'YYYY-MM-DD').format('DD.MM.YYYY')
    },
    {
      title: 'Transaction',
      dataIndex: 'projectId',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (amount) => `${amount} USD`,
    },
  ];

  if (!form.projectId && !form.gatewayId) {
    let gatewayColumn = {
      title: 'Gateway',
      dataIndex: 'gatewayId',
      render: (code) => nameGetter(code, gateways),
    };
    return insertItem(commonColumns, 1, gatewayColumn);
  }
  return commonColumns;
};

const getTotalAmount = (projects, isCurrencyType) => {
  let result = projects.reduce((acc, obj) => {
    return acc + obj.amount;
  }, 0);
  return `${amountFormatter(Math.ceil(result))} ${isCurrencyType ? CURRENCY_TYPE : ''}`;
};

const isComparision = (form) => {
  let isComparision = false;
  if ((form.projectId?.value && !form.gatewayId?.value) || (!form.projectId?.value && form.gatewayId?.value)) {
    isComparision = true;
  }
  return isComparision;
};

const getPercent = (individualList, lists) => {
  let percent = 0;
  percent = (individualList.length / lists.length) * 100;
  return Math.round(percent);
};

const graphData = (records, reports) => {
  let result = [];
  records.map((item) => {
    result.push({ type: item.label, value: getPercent(item.list, reports) });
  });
  return result;
};

const listGenerator = (list, id) => {
  let results = list.reduce((results, item) => {
    item.key = keyGenerator();
    (results[item[id]] = results[item[id]] || []).push(item);
    return results;
  }, {});
  return results;
};

const recordFilterBy = (form) => {
  let filterBy = 'projectId';
  if (form.projectId && !form.gatewayId) {
    filterBy = 'gatewayId';
  }
  return filterBy;
};

const getRecordLabel = (form, code, projects, gateways) => {
  let label = 'N/A';
  if (form.projectId && !form.gatewayId) {
    label = nameGetter(code, gateways);
  } else {
    label = nameGetter(code, projects);
  }
  return label;
};

const amountFormatter = (number = 0) => {
  return number
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getInitials = (name) => {
  return name.split(' ').reduce((acc, subname) => acc + subname[0], '').toUpperCase();
};

export {
  dateFormat,
  nameGetter,
  keyGenerator,
  titleGenerator,
  columnsToBeRendered,
  getTotalAmount,
  isComparision,
  graphData,
  listGenerator,
  recordFilterBy,
  getRecordLabel,
  amountFormatter,
  getInitials
};
