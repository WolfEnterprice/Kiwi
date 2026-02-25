import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (login(username, password)) {
      navigate('/admin')
    } else {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-black border-2 border-primary/30 rounded-2xl p-8 shadow-neon-fuchsia">
        <div className="text-center mb-8">
          <div className="size-16 bg-primary rounded-lg flex items-center justify-center shadow-neon-fuchsia mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-4xl">admin_panel_settings</span>
          </div>
          <h1 className="text-3xl font-900 uppercase italic mb-2">
            Panel <span className="text-secondary">Administrativo</span>
          </h1>
          <p className="text-slate-400">Kiwy</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-primary/20 border border-primary text-primary px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white px-6 py-4 rounded-xl font-bold shadow-neon-fuchsia transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">login</span>
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          <p>Credenciales por defecto:</p>
          <p className="mt-1">Usuario: <span className="text-secondary">admin</span></p>
          <p>Contraseña: <span className="text-secondary">kiwy2024</span></p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

