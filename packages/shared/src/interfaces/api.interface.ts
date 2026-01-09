import { UserRole } from '../enums';
import {  UserStatus } from '../types/common.types';

// Interface per l'entità User
export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Interface per le risposte API
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface IApiError {
  statusCode: number;
  message: string;
  error: string;
  timestamp: string;
  path: string;
}
