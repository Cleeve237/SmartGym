import api from './api';
import E from './api/apiEndpoints';

const userService = {
  getAll: (params) => api.get(E.USERS.GET_ALL, { params }),
  getById: (id) => api.get(E.USERS.GET_BY_ID(id)),
  create: (data) => api.post(E.USERS.CREATE, data),
  update: (id, data) => api.put(E.USERS.UPDATE(id), data),
  delete: (id) => api.delete(E.USERS.DELETE(id)),
  suspend: (id) => api.put(E.USERS.SUSPEND(id)),
  activate: (id) => api.put(E.USERS.ACTIVATE(id)),
};

export default userService;
