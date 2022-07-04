import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Collapse, Typography, Spin } from 'antd';

//Components
import Headings from '../../atoms/Headigs';
import Chart from '../../molecules/Chart';
import ListCard from '../../molecules/ListCard';
import FilterForm from '../../molecules/FilterForm';
import EmptyPlaceHolder from '../../Pages/EmptyPlaceHolder';

//Actions
import { fetchProjects, fetchGateWays, filterReports } from './ducks/actions';

//Helpers
import {
  dateFormat,
  titleGenerator,
  columnsToBeRendered,
  getTotalAmount,
  isComparision,
  graphData,
} from '../../../utils/Helpers';

const { Panel } = Collapse;
const { Title } = Typography;

const Dashboard = () => {
  const dispatch = useDispatch();

  const [isChart, setChart] = useState(false);
  const [tableTitle, setTableTitle] = useState('');
  const [columns, setColumns] = useState([]);

  const globalState = useSelector((state) => state.global);
  const { projects, gateways, reports, loading, records } = globalState;

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchGateWays());
  }, []);

  const onSubmit = (form) => {
    const reportsConfig = {
      projectId: form.projectId.value,
      gatewayId: form.gatewayId.value,
      from: dateFormat(form.from),
      to: dateFormat(form.to),
    };

    setChart(isComparision(form));
    setColumns(columnsToBeRendered(reportsConfig, gateways));
    setTableTitle(titleGenerator(reportsConfig, projects, gateways));
    dispatch(filterReports(reportsConfig));
  };

  return (
    <Row gutter={[24, 24]} justify="space-between">
      <Col span={7} xs={24} md={24} lg={7} xl={7}>
        <Headings title="Reports" description="Easily generate a report of your transaction" />
      </Col>
      <Col span={17} lg={17} xl={17} sm={24} xs={24}>
        <FilterForm onFinish={onSubmit} projects={projects} gateways={gateways} />
      </Col>

      <Col span={24}>
        {tableTitle && (
          <Title level={4} className={`mb-0`}>
            {tableTitle}
          </Title>
        )}
      </Col>

      <Col span={24}>
        <Spin spinning={loading}>
          <Row gutter={[24, 24]} justify="center">
            <Col lg={isChart && reports.length ? 12 : 24} xl={isChart && reports.length ? 12 : 24} sm={24} xs={24}>
              {!loading && records.length ? (
                <Collapse className="site-collapse-custom-collapse" bordered={false} accordion>
                  {records?.map((item, index) => {
                    return (
                      <Panel
                        className="collapse-panel"
                        key={index}
                        showArrow={false}
                        header={item.label}
                        extra={`Total ${getTotalAmount(item.list, true)}`}
                      >
                        <ListCard title="All Projects" listStat={item.list} columns={columns} isChart={isChart} />
                      </Panel>
                    );
                  })}
                </Collapse>
              ) : (
                <EmptyPlaceHolder />
              )}
            </Col>
            {!loading && isChart && reports.length && <Chart data={graphData(records, reports)} />}
          </Row>
        </Spin>
      </Col>
    </Row>
  );
};
export default Dashboard;
