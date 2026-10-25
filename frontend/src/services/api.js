// API Service Layer for Portify Team
// Connects to Node/Express backend at http://localhost:5000/api

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Error on ${endpoint}:`, error);
    return {
      success: false,
      message: error.message || 'Network connection failed',
      fallback: true,
    };
  }
}

export const api = {
  // Auth
  login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData) => request('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  getMe: () => request('/auth/me'),

  // CV Templates
  getCVTemplates: () => request('/cv-templates'),
  getCVTemplate: (id) => request(`/cv-templates/${id}`),

  // Portfolio Templates
  getPortfolioTemplates: () => request('/portfolio-templates'),
  getPortfolioTemplate: (id) => request(`/portfolio-templates/${id}`),

  // Admin APIs
  getUsers: () => request('/users'),
  getOrders: () => request('/orders'),
  getCategories: () => request('/categories'),
  getCoupons: () => request('/coupons'),
  getSettings: () => request('/settings'),
  getAdminStats: () => request('/settings/overview-stats'),

  // Health
  checkHealth: () => request('/health'),
};

export default api;
