import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Button } from 'antd';

import { DateField, SelectField } from '../../atoms/FormElements';

const FilterForm = ({ onFinish, projects, gateways }) => {
  const { control, handleSubmit } = useForm();
  return (
    <Form onFinish={handleSubmit(onFinish)} layout="inline" className="w-100 inline-form">
      <Row gutter={[24, 15]}>
        <Col span={6} sm={12} xs={12} lg={6} xl={6}>
          <SelectField
            fieldname="projectId"
            label=""
            class="mb-0 w-100"
            control={control}
            iProps={{ placeholder: 'Select project' }}
            selectOption={projects}
          />
        </Col>
        <Col span={6} sm={12} xs={12} lg={6} xl={6}>
          <SelectField
            fieldname="gatewayId"
            label=""
            class="mb-0 w-100"
            control={control}
            iProps={{ placeholder: 'Select getway' }}
            selectOption={gateways}
          />
        </Col>
        <Col span={5} sm={12} xs={12} lg={5} xl={5}>
          <DateField
            fieldname="from"
            control={control}
            class="mb-0 w-100"
            iProps={{ placeholder: 'From date', size: 'large', format: 'DD-MM-YYYY' }}
            initValue=""
          />
        </Col>
        <Col span={5} sm={12} xs={12} lg={5} xl={5}>
          <DateField
            fieldname="to"
            control={control}
            class="mb-0 w-100"
            iProps={{ placeholder: 'To date', size: 'large', format: 'DD-MM-YYYY' }}
            initValue=""
          />
        </Col>
        <Col span={2} sm={12} xs={12} lg={2} xl={2}>
          <Button size="large" type="primary" htmlType="submit">
            Generate report
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
