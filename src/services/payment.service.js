import api from './api';
import E from './api/apiEndpoints';

const paymentService = {
  initiate: (data) => api.post(E.PAYMENTS.INITIATE, data),
  verify: (transactionId) => api.get(E.PAYMENTS.VERIFY(transactionId)),
  getById: (id) => api.get(E.PAYMENTS.GET_BY_ID(id)),
  getHistory: (params) => api.get(E.PAYMENTS.GET_HISTORY, { params }),
  refund: (id) => api.post(E.PAYMENTS.REFUND(id)),
  getStats: (params) => api.get(E.PAYMENTS.GET_STATS, { params }),
};

export default paymentService;
