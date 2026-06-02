// API error type
export interface ApiError {
  message: string
  code?: string
  details?: Record<string, unknown>
}