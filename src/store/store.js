"use client"
import { create } from 'zustand'
import { decryptAndRetrieve ,encryptAndStore} from '@/utilities/Encryption'
const user = decryptAndRetrieve("ur")
const admin = decryptAndRetrieve("aur")
console.log(user,"user from store")
import { persist } from 'zustand/middleware';

export const useUserStore = create((set) => ({
  user: user?user:null,
  resetUser: () => {localStorage.removeItem("ur"); set({ user: null })},
  setUser: (newUser) => {encryptAndStore(newUser,"ur"),set({ user: newUser })},
}))
export const useAdminStore = create((set) => ({
  user: admin?admin:null,
  resetUser: () => {localStorage.removeItem("aur"); set({ user: null })},
  setUser: (newUser) => {encryptAndStore(newUser,"aur"),set({ user: newUser })},
}))

// export const useNotificationStore = create((set) => ({
//   panel: false,
//   showPanel: () => {set({ panel: true })},
//   hidePanel: () => {set({ panel: false })},
// }))


export const useAppointmentStore = create(
  persist(
    (set) => ({
      appointments: [],
      addAppointment: (data) =>
        set((state) => ({
          appointments: [...state.appointments, data],
        })),
        removeAppointmentBySubId: (service) =>
          set((state) => ({
            appointments: state.appointments.filter(
              (appointment) =>
                !(appointment.mcat === service.mcat && appointment.sub.id === service.sub.id)
            ),
          })),
          removeAllAppointments: () => set(() => ({ appointments: [] })),
    }),
    {
      name: 'appointment-storage', // Key in localStorage
      getStorage: () => localStorage,
    }
  )
);

export const useAuthBannerStore = create((set) => ({
  authBanner: {
    show:true,
    signIn: false,
    signUp: false,
    booking: true,
  },
  setAuthBanner: (data) => {
    set((state) => ({ authBanner: {...state.authBanner, ...data }
    }));
  }
}));


