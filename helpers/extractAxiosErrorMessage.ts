import { AxiosError } from 'axios';

import { AxiosErrorResponseData } from '@/constants/interfaces';

const extractAxiosErrorMessage = (error: AxiosError): string => {
  const errorData = error.response?.data as AxiosErrorResponseData;
  return errorData.message;
};

export default extractAxiosErrorMessage;
