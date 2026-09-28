import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './Auth.css';

function getAuthErrorMessage(error) {
  const messages = {
    'auth/email-already-in-use': 'Ya existe una cuenta con ese email.',
    'auth/invalid-email': 'Ingresá un email válido.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    'auth/invalid-credential': 'El email o la contraseña son incorrectos.',
    'auth/user-not-found': 'No encontramos una cuenta con ese email.',
    'auth/wrong-password': 'El email o la contraseña son incorrectos.',
    'auth/too-many-requests': 'Hubo demasiados intentos. Probá nuevamente más tarde.',
    'auth/network-request-failed': 'No se pudo conectar. Revisá tu conexión.'
  };

  return messages[error.code] || error.message || 'No se pudo completar la autenticación.';
}

function Auth({ mode }) {
  const isRegister = mode === 'register';
  const { currentUser, isAuthLoading, register, login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const destination = location.state?.from?.pathname || '/';

  if (isAuthLoading) {
    return <p className="auth-status">Verificando sesión...</p>;
  }

  if (currentUser) {
    return <Navigate to={destination} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }
    } catch (authError) {
      setError(getAuthErrorMessage(authError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <p className="auth-eyebrow">Ecos Libros Store</p>
        <h1>{isRegister ? 'Crear cuenta' : 'Iniciar sesión'}</h1>
        <label htmlFor="auth-email">Email</label>
        <input
          id="auth-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="auth-password">Contraseña</label>
        <input
          id="auth-password"
          type="password"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {error && <p className="auth-error" role="alert">{error}</p>}
        <button className="auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Procesando...' : isRegister ? 'Registrarme' : 'Ingresar'}
        </button>
        <p className="auth-switch">
          {isRegister ? '¿Ya tenés cuenta?' : '¿Todavía no tenés cuenta?'}{' '}
          <Link to={isRegister ? '/login' : '/register'}>
            {isRegister ? 'Iniciá sesión' : 'Registrate'}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Auth;