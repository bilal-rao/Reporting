import React from 'react';
import { Space, Typography } from 'antd';
const Headings = (props) => {
  const { title, description } = props;
  const { Title, Text } = Typography;
  return (
    <Space direction="vertical" size={10}>
      {title && (
        <Title level={4} className="mb-0 font-500" style={{ fontSize: '20px' }}>
          {title}
        </Title>
      )}
      {description && <Text className="mb-0 c-gray">{description}</Text>}
    </Space>
  );
};

export default Headings;
