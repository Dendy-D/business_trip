import httpClient, { IHttpParameters, prepareParameters } from './http-client';
import { AxiosResponse } from 'axios';
// import {PageTicket} from "../models/PageTicket";
// import {DeleteResponse} from "../models/DeleteResponse";
// import { Page } from '../models/PageModel';

export enum ServiceUrlEnum {
  APPLICATION = '/api/application',
  TASK = '/api/task',
  USER = '/api/identity/user',
  GROUP = '/api/identity/group',
  PURCHASE_APPLICATION = '/api/purchase-application',
  PURCHASE_BUDGET = '/api/purchase-budget',
  SUPPLIER = '/api/supplier',
  SUPPLIER_LINK = '/api/supplier-link',
  PURCHASE_SUBJECT = '/api/purchase-subject',
  PURCHASE_ITEM = '/api/purchase-item',
  PROJECT = '/api/project',
  PROJECT_LINK = '/api/project-link',
  ATTACHMENT = '/api/attachment',
  CHECK = '/api/check',
  CODE = '/api/code',
  CODE_VALUE = '/api/code-value',
  APPLICATION_STATUS = '/api/application-status',
  BUSINESS_CALENDAR = '/api/business-calender',
  BUSINESS_CALENDAR_TYPE = '/api/business-calender-type',
}

// export const getEntityList = <T>(
//   url: ServiceUrlEnum,
//   parameters?: IHttpParameters
// ): Promise<AxiosResponse<Page<T>>> => {
//   const params = prepareParameters(parameters);
//   return httpClient.get<Page<T>>(`${url}${params}`);
// };

export const getEntityList = <T>(
  url: ServiceUrlEnum,
  parameters?: IHttpParameters
): Promise<any> => {
  const params = prepareParameters(parameters);
  return httpClient.get<any>(`${url}${params}`);
};

export const updateEntity = <T>(
  url: ServiceUrlEnum,
  entity: T
): Promise<AxiosResponse<T>> => {
  return httpClient.put<T>(url, entity);
};

export const createEntity = <T>(
  url: ServiceUrlEnum,
  entity: T
): Promise<AxiosResponse<T>> => {
  return httpClient.post<T>(url, entity);
};

export const deleteEntity = <T>(
  url: ServiceUrlEnum,
  entity: T
): Promise<AxiosResponse<any>> => {
  return httpClient.delete<any>(url, { data: entity });
};

export const getEntity = <T>(
  url: ServiceUrlEnum,
  id: string
): Promise<AxiosResponse<T>> => {
  return httpClient.get<T>(`${url}/${id}`);
};
