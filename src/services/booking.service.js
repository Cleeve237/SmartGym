import api from './api';
import E from './api/apiEndpoints';

const bookingService = {
  getAll: (params) => api.get(E.BOOKINGS.GET_ALL, { params }),
  getById: (id) => api.get(E.BOOKINGS.GET_BY_ID(id)),
  create: (data) => api.post(E.BOOKINGS.CREATE, data),
  update: (id, data) => api.put(E.BOOKINGS.UPDATE(id), data),
  cancel: (id) => api.put(E.BOOKINGS.CANCEL(id)),
  confirm: (id) => api.put(E.BOOKINGS.CONFIRM(id)),
  complete: (id) => api.put(E.BOOKINGS.COMPLETE(id)),
  getByCoach: (coachId, params) => api.get(E.BOOKINGS.GET_BY_COACH(coachId), { params }),
  getByClient: (clientId, params) => api.get(E.BOOKINGS.GET_BY_CLIENT(clientId), { params }),
};

export default bookingService;
