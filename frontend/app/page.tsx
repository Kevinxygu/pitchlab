'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/dashboard')
    }
  }, [isAuthenticated, isLoading, router])

  const handleCreateAccount = () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/dashboard`,
        screen_hint: 'signup',
      },
    })
  }

  if (isLoading) {
    return (
      <div className="login-shell">
        <div className="card glass loading-card">
          <p className="subtle-text">Checking your session...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="login-shell">
        <div className="card glass error-card">
          <div className="error-badge">Auth error</div>
          <p className="error-text">{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <main className="login-shell">
      <button className="primary-btn" type="button" onClick={handleCreateAccount}>
        Create Account
      </button>
    </main>
  )
}
