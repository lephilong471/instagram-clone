import FETCH from '../fetch';

export const loginApi = (body: { email: string; password: string }) =>
  FETCH({
    method: 'POST',
    path: '/login',
    withToken: false,
    body: body
  });

export const registerApi = (body: {
  username: string;
  password: string;
  fullname: string;
  email: string;
}) =>
  FETCH({
    method: 'POST',
    path: `/register`,
    body: body,
    withToken: false
  });
