import axios from 'axios';

import type { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';
import type { SigninFormInputs } from '@/components/forms/SigninForm/SigninForm';
import type {
  ContactFormInputs,
  SignoutBody,
  SignupOuterBody,
  NewDatesByAdminBody,
  DeleteDateByAdminBody,
  ReserveDateByUserBody,
  RefuseDateByUserBody,
  ConfirmDateByAdminBody,
  Role,
} from '@/constants/interfaces';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

const setToken = (token: string) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async (userData: SignupFormInputs) => {
  const result = await instance.post('/users/signup', { ...userData });
  const { data, status } = result;
  return { data, status };
};

export const signin = async (userData: SigninFormInputs) => {
  const { data } = await instance.post('/users/signin', { ...userData });
  setToken(data?.accessToken);
  return data;
};

export const getCurrent = async (accessToken: string) => {
  setToken(accessToken);
  const { data } = await instance('/users/current');
  setToken(data?.accessToken);
  return data;
};

export const signout = async (email: SignoutBody) => {
  const result = await instance.post('/users/signout', { ...email });
  setToken('');
  return result;
};

export const addNewDates = async (newDatesData: NewDatesByAdminBody) => {
  const { data } = await instance.post('/dates/new', { ...newDatesData });
  setToken(data?.accessToken);
  return data?.newVisitDates;
};

export const getAllDates = async () => {
  const { data } = await instance('/dates/all');
  setToken(data?.accessToken);
  return data?.allAvailableVisitDates;
};

export const deleteDate = async (dateInfo: DeleteDateByAdminBody) => {
  const { dateID, role } = dateInfo;
  const { data } = await instance.delete(`/dates/delete/${dateID}`, { data: { role } });
  setToken(data?.accessToken);
  return data;
};

export const reserveDate = async (dateInfo: ReserveDateByUserBody) => {
  const { dateID, role } = dateInfo;
  const { data } = await instance.post(`/dates/reserve/${dateID}`, { role });
  setToken(data?.accessToken);
  return data;
};

export const refuseDate = async (dateInfo: RefuseDateByUserBody) => {
  const { dateID, role } = dateInfo;
  const { data } = await instance.post(`/dates/refuse/${dateID}`, { role });
  setToken(data?.accessToken);
  return data;
};

export const confirmDate = async (dateInfo: ConfirmDateByAdminBody) => {
  const { dateID, role } = dateInfo;
  const { data, status } = await instance.post(`dates/confirm/${dateID}`, { role });
  setToken(data?.accessToken);
  return { data, status };
};

export const getClients = async (role: Role) => {
  const { data } = await instance('/users/all', { params: { role } });
  setToken(data?.accessToken);
  return data.users;
};

export const postConfirm = async (role: Role, userEmail: string, date: Date) => {
  const { data, status } = await instance.post(`/users/postconfirm/${userEmail}`, {
    role,
    visitDate: date,
  });
  setToken(data?.accessToken);
  return status;
};

export const sendToTelegram = async (formData: ContactFormInputs) => {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const { name, phone, email, messageToSend } = formData;

  const text = `
  <b>Name: ${name}</b>
  <b>Phone: ${phone}</b>
  <b>${email ? email : ''}</b>  
  <b>${messageToSend}</b>`;

  const { data, status } = await axios.post(url, {
    chat_id,
    parse_mode: 'html',
    text,
  });
  return { data, status };
};

export const outerSignup = async (userData: SignupOuterBody) => {
  const { data } = await instance.post('/users/signupouter', userData);
  setToken(data?.accessToken);
  return data;
};
