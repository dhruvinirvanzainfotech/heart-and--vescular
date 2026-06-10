import { createContext, useContext, useState } from 'react'
import AppointmentModal from './AppointmentModal'

const ApptCtx = createContext(() => {})

export const useAppointment = () => useContext(ApptCtx)

export function AppointmentProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <ApptCtx.Provider value={() => setOpen(true)}>
      {children}
      {open && <AppointmentModal onClose={() => setOpen(false)} />}
    </ApptCtx.Provider>
  )
}
