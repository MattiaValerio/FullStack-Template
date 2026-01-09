export interface ApiResponse<T = undefined> {
    ok: boolean;
    data?: T;
    message: string;
    error?: ApiError;
}

export interface ApiError {
    code: string;
    message: string;
}
