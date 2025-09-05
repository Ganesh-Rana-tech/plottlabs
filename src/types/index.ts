export interface ContactFormData {
  name: string;
  agency: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface ApiResponse<T = any> {
  message: string;
  data?: T;
  error?: string;
}

export interface DemoRequest extends ContactFormData {
  id: string;
  timestamp: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed';
}