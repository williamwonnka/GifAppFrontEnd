import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddGifs } from '../pages'

export const ComponentsRoutes = () => {
  return (
    <Routes>
        <Route path="/Gifs/Insert" element={ <AddGifs/> } />
    </Routes>
  )
}
