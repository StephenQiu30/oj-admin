import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { ACCOUNT_TITLE } from '@/constants';
import { useModel } from '@@/exports';
import { UserCard } from '@/components';

/**
 * 个人中心
 * @constructor
 */
const AccountCenter: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser;

  return (
    <PageContainer title={ACCOUNT_TITLE} breadcrumb={undefined}>
      <UserCard user={currentUser ?? {}} />
    </PageContainer>
  );
};

export default AccountCenter;
