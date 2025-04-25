import { useAuth0 } from "@auth0/auth0-react";

export const AuthErrorLogin = () => {
  const { loginWithPopup, loginWithRedirect, isLoading, error } = useAuth0();

  const handleLogin = async () => {
    try {
      // Лучше использовать popup, чтобы не делать полный редирект
      await loginWithPopup();
      window.location.reload(); // перезагружаем, чтобы обновить состояние приложения после логина
    } catch (e) {
      console.error("Login failed", e);
      // fallback к редиректу
      loginWithRedirect();
    }
  };

  return (
    <div className="auth-error-login">
      <p>Please log in to access this content.</p>
      {error && <p style={{ color: "red" }}>Error during login: {error.message}</p>}
      <button className="btn btn-primary" onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
      <style jsx>{`
        .auth-error-login {
          padding: 1rem;
          text-align: center;
          color: var(--color-error, red);
        }
        p {
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .btn {
          cursor: pointer;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: var(--color-primary, #0070f3);
          color: white;
          transition: background-color 0.2s;
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: default;
        }
        .btn:hover:not(:disabled) {
          background-color: var(--color-primary-hover, #005bb5);
        }
      `}</style>
    </div>
  );
};