import { JWT, LANG } from '@/config';
import { isNil, isString } from 'lodash-es';
import dayjs from 'dayjs';

import { getCookie } from './session';

export const requestHeaders = ({
  withToken,
  language = 'vi'
}: {
  withToken: boolean | string;
  language?: string;
}) => {
  let header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    lang: language
  };
  if (withToken) {
    header = {
      ...header,
      ...authHeader(withToken)
    };
  }
  return header;
};

const authHeader = (withToken: string | boolean) => {
  const token = (typeof withToken === 'string' && withToken) || getCookie(JWT);
  const language = getCookie(LANG);

  if (token) {
    return {
      lang: language ? language : 'vi', // vietnamese is default
      Authorization: 'Bearer ' + token,
      localDatetime: dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
    };
  } else {
    return { localDatetime: dayjs().format('YYYY-MM-DDTHH:mm:ssZ') };
  }
};

export const parseObjToQuery = ({
  params = {},
  startWith = '?'
}: {
  params: { [x: string]: string };
  startWith?: string;
}) => {
  if (!params) return '';
  let keys = Object.keys(params).filter(
    key =>
      !isNil(params[key]) &&
      !(isString(params[key]) && params[key].trim().length === 0)
  );

  return startWith + keys.map(key => `${key.trim()}=${params[key].trim()}`);
};

export default authHeader;
