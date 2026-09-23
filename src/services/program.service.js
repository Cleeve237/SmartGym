import api from './api';
import E from './api/apiEndpoints';

const programService = {
  getAll: (params) => api.get(E.PROGRAMS.GET_ALL, { params }),
  getById: (id) => api.get(E.PROGRAMS.GET_BY_ID(id)),
  create: (data) => api.post(E.PROGRAMS.CREATE, data),
  update: (id, data) => api.put(E.PROGRAMS.UPDATE(id), data),
  delete: (id) => api.delete(E.PROGRAMS.DELETE(id)),
  getByCoach: (coachId, params) => api.get(E.PROGRAMS.GET_BY_COACH(coachId), { params }),
};

export default programService;
