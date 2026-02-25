import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useContent, ContentProvider } from '../context/ContentContext'
import AdminContent from '../components/AdminContent'

function AdminDashboardContent() {
  const { logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('general')

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login')
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Header */}
      <header className="bg-black border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center shadow-neon-fuchsia">
              <span className="material-symbols-outlined text-white text-3xl">admin_panel_settings</span>
            </div>
            <h1 className="text-2xl font-800 tracking-tighter uppercase italic">
              Panel <span className="text-secondary">Admin</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              Ver Sitio
            </a>
            <button
              onClick={handleLogout}
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full font-bold shadow-neon-fuchsia transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Salir
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-black/50 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2">
            {[
              { id: 'general', label: 'General', icon: 'settings' },
              { id: 'offers', label: 'Ofertas', icon: 'local_offer' },
              { id: 'gallery', label: 'Galería', icon: 'photo_library' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AdminContent activeTab={activeTab} />
      </div>
    </div>
  )
}

function AdminDashboard() {
  return (
    <ContentProvider>
      <AdminDashboardContent />
    </ContentProvider>
  )
}

export default AdminDashboard

