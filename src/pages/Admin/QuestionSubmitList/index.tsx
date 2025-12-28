import { PlusOutlined } from '@ant-design/icons';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, message, Popconfirm, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import { deleteQuestionSubmit, listQuestionSubmitByPage, } from '@/services/oj-backend/questionSubmitController';
import { CreateQuestionSubmitModal, UpdateQuestionSubmitModal, } from '@/pages/Admin/QuestionSubmitList/components';

/**
 * 删除节点
 *
 * @param row
 */
const handleDelete = async (row: API.DeleteRequest) => {
  const hide = message.loading('正在删除');
  if (!row) return true;
  try {
    const res = await deleteQuestionSubmit({
      id: row.id,
    });
    if (res.code === 0 && res.data) {
      message.success('删除成功');
    } else {
      message.error(`删除失败${res.message}, 请重试!`);
    }
  } catch (error: any) {
    message.error(`删除失败${error.message}, 请重试!`);
  } finally {
    hide();
  }
};

/**
 * 用户管理列表
 * @constructor
 */
const QuestionSubmitList: React.FC = () => {
  // 新建窗口的Modal框
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 更新窗口的Modal框
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户的所点击的数据
  const [currentRow, setCurrentRow] = useState<API.QuestionSubmit>();

  /**
   * 表格列数据
   */
  const columns: ProColumns<API.QuestionSubmit>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '编程语言',
      dataIndex: 'language',
      valueType: 'text',
    },
    {
      title: '用户代码',
      dataIndex: 'code',
      valueType: 'textarea',
    },
    {
      title: '判题信息',
      dataIndex: 'judgeInfo',
      valueType: 'jsonCode',
      hideInForm: true,
    },
    {
      title: '判题状态',
      dataIndex: 'status',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '题目通过数',
      dataIndex: 'acceptNum',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '判题用例(json数组)',
      dataIndex: 'judgeCase',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '判题配置(json数组)',
      dataIndex: 'judgeConfig',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '题目id',
      dataIndex: 'questionId',
      valueType: 'text',
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '更新时间',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size={'middle'}>
          <Typography.Link
            key="update"
            onClick={() => {
              setUpdateModalVisible(true);
              setCurrentRow(record);
              actionRef.current?.reload();
            }}
          >
            修改
          </Typography.Link>
          {/*删除表单用户的PopConfirm框*/}
          <Popconfirm
            title="确定删除？"
            description="删除后将无法恢复?"
            okText="确定"
            cancelText="取消"
            onConfirm={async () => {
              await handleDelete(record);
              actionRef.current?.reload();
            }}
          >
            <Typography.Link
              key={'delete'}
              type={'danger'}
              onClick={() => {
                setCurrentRow(record);
              }}
            >
              删除
            </Typography.Link>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <ProTable<API.QuestionSubmit, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey={'id'}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Space key={'space'} wrap>
            <Button
              key="create"
              icon={<PlusOutlined />}
              type={'primary'}
              onClick={() => {
                setCreateModalVisible(true);
              }}
            >
              新建
            </Button>
          </Space>,
        ]}
        request={async (params, sort, filter) => {
          const sortField = Object.keys(sort)?.[0];
          const sortOrder = sort?.[sortField] ?? undefined;
          const { data, code } = await listQuestionSubmitByPage({
            ...params,
            ...filter,
            sortField,
            sortOrder,
          } as API.QuestionSubmitQueryRequest);

          return {
            success: code === 0,
            data: data?.records || [],
            total: data?.total || 0,
          };
        }}
        columns={columns}
      />
      {/*新建表单的Modal框*/}
      {createModalVisible && (
        <CreateQuestionSubmitModal
          onCancel={() => {
            setCreateModalVisible(false);
          }}
          onSubmit={async () => {
            setCreateModalVisible(false);
            actionRef.current?.reload();
          }}
          visible={createModalVisible}
          columns={columns}
        />
      )}

      {/*更新表单的Modal框*/}
      {updateModalVisible && (
        <UpdateQuestionSubmitModal
          onCancel={() => {
            setUpdateModalVisible(false);
          }}
          onSubmit={async () => {
            setUpdateModalVisible(false);
            setCurrentRow(undefined);
            actionRef.current?.reload();
          }}
          visible={updateModalVisible}
          oldData={currentRow}
          columns={columns}
        />
      )}
    </>
  );
};
export default QuestionSubmitList;
