import api from './api';
import E from './api/apiEndpoints';

const coachService = {
  getAll: (params) => api.get(E.COACHS.GET_ALL, { params }),
  getById: (id) => api.get(E.COACHS.GET_BY_ID(id)),
  create: (data) => api.post(E.COACHS.CREATE, data),
  update: (id, data) => api.put(E.COACHS.UPDATE(id), data),
  delete: (id) => api.delete(E.COACHS.DELETE(id)),
  validate: (id) => api.put(E.COACHS.VALIDATE(id)),
  reject: (id) => api.put(E.COACHS.REJECT(id)),
  suspend: (id) => api.put(E.COACHS.SUSPEND(id)),
  getPrograms: (id, params) => api.get(E.COACHS.GET_PROGRAMS(id), { params }),
  getAvailability: (id) => api.get(E.COACHS.GET_AVAILABILITY(id)),
  getReviews: (id, params) => api.get(E.COACHS.GET_REVIEWS(id), { params }),
  getStats: (id) => api.get(E.COACHS.GET_STATS(id)),
};

export default coachService;
