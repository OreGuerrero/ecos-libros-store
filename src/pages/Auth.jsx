import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './Auth.css';

function getAuthErrorMessage(error) {
  const messages = {
    'auth/email-already-in-use': 'Ya hay una cuenta con ese correo electrónico.',
    'auth/invalid-email': 'Ingresa un correo electrónico válido.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    'auth/invalid-credential': 'El correo electrónico o la contraseña son incorrectos.',
    'auth/user-not-found': 'No encontramos una cuenta con ese correo electrónico.',
    'auth/wrong-password': 'El correo electrónico o la contraseña son incorrectos.',
    'auth/too-many-requests': 'Hubo demasiados intentos. Intenta de nuevo más tarde.',
    'auth/network-request-failed': 'No pudimos conectarnos. Revisa tu conexión.'
  };

  return messages[error.code] || 'No pudimos completar el acceso. Intenta de nuevo.';
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
        <label htmlFor="auth-email">Correo electrónico</label>
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
          {isRegister ? '¿Ya tienes una cuenta?' : '¿Todavía no tienes una cuenta?'}{' '}
          <Link to={isRegister ? '/login' : '/register'}>
            {isRegister ? 'Inicia sesión' : 'Regístrate'}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Auth;