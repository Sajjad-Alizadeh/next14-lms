import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios";
import {API_URL} from "@/configs/global";
import {
  BadRequestError, NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledError,
  ValidationError
} from "@/types/http-errors.interface";

type ApiError = BadRequestError | UnauthorizedError | ValidationError | NotFoundError | UnhandledError | NetworkError

export const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

httpService.interceptors.response.use(
  (response) => {
    return response
  }, error => {
    debugger
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;

        if (statusCode === 400 && !errorData.errors) {
          throw {
            ...errorData
          } as BadRequestError
        }

        if (statusCode === 400 && errorData.errors) {
          throw {
            ...errorData
          } as ValidationError
        }

        if (statusCode === 404) {
          throw {
            ...errorData,
            detail: 'سرویس مورد نظر یافت نشد'
          } as NotFoundError
        }

        if (statusCode === 403) {
          throw {
            ...errorData,
            detail: 'دسترسی به سرویس مورد نظر امکان پذیر نمی باشد'
          } as UnauthorizedError
        }

        if (statusCode >= 500) {
          throw {
            ...errorData,
            detail: 'خطای سرور'
          } as UnhandledError
        }
      }
    } else {
      throw {
        detail: 'خطای شبکه'
      } as NetworkError
    }
  }
)

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  debugger
  const response: AxiosResponse = await httpService(url,options);
  return response.data as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> {
  debugger
  const options: AxiosRequestConfig = {
    headers: headers,
    method: 'GET'
  }
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult> (
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: headers,
    data: JSON.stringify(data)
  };

  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult> (
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'PUT',
    headers: headers,
    data: JSON.stringify(data)
  };

  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };

  return await apiBase(url, options);
}

export {createData, readData, updateData, deleteData}