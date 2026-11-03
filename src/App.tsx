import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactUsPage from './pages/ContactUsPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}
