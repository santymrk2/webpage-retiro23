import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import Remember from './pages/Remember.jsx'
import Calendar from './pages/Calendar.jsx'
import NotFound from './pages/NotFound.jsx'
import Songs from './pages/Songs.jsx'
import Messages from './pages/Messages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='remember' element={<Remember />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='songs' element={<Songs />} />
          <Route path='messages' element={<Messages />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
</HashRouter>
  </React.StrictMode>
)

