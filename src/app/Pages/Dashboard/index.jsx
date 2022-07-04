import React, { useState } from 'react';


//Components
import Dashboard from '../../templates/Dashboard';
import PortalDashboard from '../../modules/Dashboard';

export default (props) => {
  const [loading, setLoading] = useState(false);
  return (
    <Dashboard load={loading}>
      <PortalDashboard />
    </Dashboard>
  );
};
