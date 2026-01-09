// Tipi comuni per l'autenticazione
export type UserRole = 'admin' | 'lawyer' | 'client' | 'guest';

export type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended';

export type DocumentStatus = 'draft' | 'pending' | 'approved' | 'rejected';

// Tipi per paginazione
export type SortOrder = 'asc' | 'desc';

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: SortOrder;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
