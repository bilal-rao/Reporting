import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default (props) => {
  let history = useHistory();

  const redirectToDashboard = () => {
    history.push('/');
  };
  
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={redirectToDashboard} type="primary">
          Back Home
        </Button>
      }
    />
  );
};
