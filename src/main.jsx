import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import Rules from './pages/Rules.jsx'
import Calendar from './pages/Calendar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='rules' element={<Rules />} />
          <Route path='calendar' element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

