import api from './api';
import E from './api/apiEndpoints';

const reviewService = {
  getAll: (params) => api.get(E.REVIEWS.GET_ALL, { params }),
  getById: (id) => api.get(E.REVIEWS.GET_BY_ID(id)),
  create: (data) => api.post(E.REVIEWS.CREATE, data),
  update: (id, data) => api.put(E.REVIEWS.UPDATE(id), data),
  delete: (id) => api.delete(E.REVIEWS.DELETE(id)),
  approve: (id) => api.put(E.REVIEWS.APPROVE(id)),
  flag: (id) => api.put(E.REVIEWS.FLAG(id)),
  getByCoach: (coachId, params) => api.get(E.REVIEWS.GET_BY_COACH(coachId), { params }),
};

export default reviewService;
