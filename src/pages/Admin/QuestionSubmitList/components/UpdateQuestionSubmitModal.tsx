import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';
import { updateQuestionSubmit } from '@/services/oj-backend/questionSubmitController';

interface UpdateProps {
  oldData?: API.QuestionSubmit;
  onCancel: () => void;
  onSubmit: (values: API.QuestionSubmitUpdateRequest) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.QuestionSubmit>[];
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.QuestionSubmitUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    const res = await updateQuestionSubmit(fields);
    if (res.code === 0 && res.data) {
      message.success('更新成功');
      return true;
    } else {
      message.error(`更新失败${res.message}, 请重试!`);
      return false;
    }
  } catch (error: any) {
    message.error(`更新失败${error.message}, 请重试!`);
    return false;
  } finally {
    hide();
  }
};

/**
 * 更新标签
 * @param props
 * @constructor
 */
const UpdateQuestionSubmitSubmitModal: React.FC<UpdateProps> = (props) => {
  const { oldData, visible, onSubmit, onCancel, columns } = props;
  if (!oldData) {
    return <></>;
  }

  return (
    <Modal
      destroyOnHidden
      title={'更新问题信息'}
      open={visible}
      onCancel={() => onCancel?.()}
      centered
      footer
    >
      <ProTable
        type={'form'}
        form={{
          initialValues: {
            ...oldData,
          },
        }}
        columns={columns}
        onSubmit={async (values: API.QuestionSubmitUpdateRequest) => {
          const success = await handleUpdate({
            ...values,
            id: oldData?.id,
          });
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default UpdateQuestionSubmitSubmitModal;
