import React from 'react';
import { Image, Typography, Space } from 'antd';

//Images
import EmptyPlaceHolder from '../../../assets/images/empty.svg';

const { Title, Paragraph } = Typography;

export default () => {
  return (
    <Space className="placeholder" direction="vertical" align="center">
      <Title level={5} strong>
        No reports
      </Title>
      <Paragraph style={{ width: '40%', textAlign: 'center', margin: '0 auto' }}>
        Currently you have no data for the reports to be generated. Once you start generating traffic through the
        Balance application the reports will be shown.
      </Paragraph>

      <Image preview={false} alt="no record found" src={EmptyPlaceHolder} />
    </Space>
  );
};
