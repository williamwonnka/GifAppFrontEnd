import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentsRoutes } from '../components/routes/ComponentsRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Routes accessible without logging in */}
      <Route path="/*" element={<ComponentsRoutes />} />

      {/* Protected routes (accessible only after authentication) */}
    
       
    </Routes>
  )
}
