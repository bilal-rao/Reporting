import React from 'react';
import { Row, Col, Card, Table} from 'antd';

export default (props) => {
  const {
    listClass,
    listStat,
    columns,
  } = props;

  return (
    <Card bordered={false} className={`design-card ${listClass ? listClass : ''}`}>
      <Row gutter={[20, 30]}>
        <Col span={24}>
          <Table pagination={{ defaultPageSize: 3 }} dataSource={listStat} columns={columns} />
        </Col>
      </Row>
    </Card>
  );
};
