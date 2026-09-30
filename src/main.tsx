import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Invitation } from './components/Invitation'
import { InvitationPage } from './components/InvitationPage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider
      theme={webLightTheme}
      style={{ backgroundColor: 'transparent', minHeight: '100vh' }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/details" element={<InvitationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </FluentProvider>
  </StrictMode>,
)
