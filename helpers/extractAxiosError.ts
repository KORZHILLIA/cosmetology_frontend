import { AxiosError } from 'axios';

import { AxiosErrorResponseData, ExtractedAxiosError } from '@/constants/interfaces';

const extractAxiosError = (error: AxiosError): ExtractedAxiosError => {
  const status = error.response?.status;
  const errorData = error.response?.data as AxiosErrorResponseData;
  const message = errorData.message;
  return { status: status as number, message };
};

export default extractAxiosError;
