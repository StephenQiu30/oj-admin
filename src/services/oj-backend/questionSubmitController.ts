// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /questionSubmit/add */
export async function addQuestionSubmit(
  body: API.QuestionSubmitAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/questionSubmit/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /questionSubmit/delete */
export async function deleteQuestionSubmit(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/questionSubmit/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /questionSubmit/edit */
export async function editQuestionSubmit(
  body: API.QuestionSubmitEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/questionSubmit/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /questionSubmit/get/vo */
export async function getQuestionSubmitVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionSubmitVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestionSubmitVO>('/questionSubmit/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /questionSubmit/list/page */
export async function listQuestionSubmitByPage(
  body: API.QuestionSubmitQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionSubmit>('/questionSubmit/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /questionSubmit/list/page/vo */
export async function listQuestionSubmitVoByPage(
  body: API.QuestionSubmitQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionSubmitVO>('/questionSubmit/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /questionSubmit/my/list/page/vo */
export async function listMyQuestionSubmitVoByPage(
  body: API.QuestionSubmitQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionSubmitVO>('/questionSubmit/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /questionSubmit/update */
export async function updateQuestionSubmit(
  body: API.QuestionSubmitUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/questionSubmit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
