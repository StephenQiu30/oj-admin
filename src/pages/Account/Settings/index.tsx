import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import { ACCOUNT_TITLE } from '@/constants';

/**
 * 个人设置
 * @constructor
 */
const Settings: React.FC = () => {
  return <PageContainer title={ACCOUNT_TITLE}></PageContainer>;
};

export default Settings;
