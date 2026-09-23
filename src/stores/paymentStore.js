import { create } from 'zustand';
import paymentService from '../services/payment.service';

const usePaymentStore = create((set) => ({
  payments: [],
  selectedPayment: null,
  totalCount: 0,
  currentPage: 1,
  totalPages: 1,
  stats: null,
  isLoading: false,
  error: null,

  initiatePayment: async (paymentData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await paymentService.initiate(paymentData);
      set({ isLoading: false });
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  verifyPayment: async (transactionId) => {
    set({ isLoading: true, error: null });
    try {
      const data = await paymentService.verify(transactionId);
      set({ isLoading: false });
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  fetchPayments: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const data = await paymentService.getHistory(params);
      set({
        payments: data.payments || data.data || [],
        totalCount: data.total || data.totalCount || 0,
        currentPage: data.page || data.currentPage || 1,
        totalPages: data.totalPages || 1,
        isLoading: false,
      });
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  fetchPayment: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await paymentService.getById(id);
      set({ selectedPayment: data.payment || data, isLoading: false });
      return data.payment || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  refundPayment: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await paymentService.refund(id);
      set((state) => ({
        payments: state.payments.map((p) =>
          p.id === id ? { ...p, status: 'refunded' } : p
        ),
        isLoading: false,
      }));
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  fetchStats: async (params) => {
    try {
      const data = await paymentService.getStats(params);
      set({ stats: data });
      return data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  setPayments: (payments) => set({ payments }),
  setSelectedPayment: (payment) => set({ selectedPayment: payment }),
  clearPayments: () =>
    set({ payments: [], selectedPayment: null, totalCount: 0 }),
}));

export default usePaymentStore;
