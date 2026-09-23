import { create } from 'zustand';
import bookingService from '../services/booking.service';

const useBookingStore = create((set) => ({
  bookings: [],
  selectedBooking: null,
  totalCount: 0,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  error: null,

  fetchBookings: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const data = await bookingService.getAll(params);
      set({
        bookings: data.bookings || data.data || [],
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

  fetchBooking: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await bookingService.getById(id);
      set({ selectedBooking: data.booking || data, isLoading: false });
      return data.booking || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  createBooking: async (bookingData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await bookingService.create(bookingData);
      set((state) => ({
        bookings: [data.booking || data, ...state.bookings],
        isLoading: false,
      }));
      return data.booking || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  updateBooking: async (id, bookingData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await bookingService.update(id, bookingData);
      set((state) => ({
        bookings: state.bookings.map((b) =>
          b.id === id ? data.booking || data : b
        ),
        selectedBooking: data.booking || data,
        isLoading: false,
      }));
      return data.booking || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  cancelBooking: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await bookingService.cancel(id);
      set((state) => ({
        bookings: state.bookings.map((b) =>
          b.id === id ? { ...b, status: 'cancelled' } : b
        ),
        isLoading: false,
      }));
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  confirmBooking: async (id) => {
    try {
      await bookingService.confirm(id);
      set((state) => ({
        bookings: state.bookings.map((b) =>
          b.id === id ? { ...b, status: 'confirmed' } : b
        ),
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  completeBooking: async (id) => {
    try {
      await bookingService.complete(id);
      set((state) => ({
        bookings: state.bookings.map((b) =>
          b.id === id ? { ...b, status: 'completed' } : b
        ),
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  setBookings: (bookings) => set({ bookings }),
  setSelectedBooking: (booking) => set({ selectedBooking: booking }),
  clearBookings: () =>
    set({ bookings: [], selectedBooking: null, totalCount: 0 }),
}));

export default useBookingStore;
