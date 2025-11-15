import { useEffect, useState, type ChangeEvent } from 'react'
import './style.css'

declare global {
  interface Window {
    google: any;
  }
}

const BACKEND_URL = 'http://localhost:4000';
const GOOGLE_CLIENT_ID = '411040153605-lnq5ojresaob1qoomtapuaeprmahc2nc.apps.googleusercontent.com';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthResponse {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

function App() {
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [result, setResult] = useState<AuthResponse | null>(null);
  const [backendUrl, setBackendUrl] = useState(BACKEND_URL);
  const [lastSignInAt, setLastSignInAt] = useState<string | null>(null);
  const [showFullTokens, setShowFullTokens] = useState(false);

  useEffect(() => {
    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
        setIsGoogleLoaded(true);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = async (response: { credential: string }) => {
    setLoading(true);
    setStatus({ type: 'info', message: 'Sending token to backend...' });
    setResult(null);

    try {
      const res = await fetch(`${backendUrl}/api/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: response.credential,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      setStatus({ type: 'success', message: '✅ Sign-in successful!' });
      setResult(data);
      setLastSignInAt(new Date().toLocaleString());
      setShowFullTokens(false);

      // Store tokens in localStorage
      localStorage.setItem('accessToken', data.tokens.accessToken);
      localStorage.setItem('refreshToken', data.tokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.user));

      console.log('Full response:', data);
      console.log('Access Token:', data.tokens.accessToken);
      console.log('Refresh Token:', data.tokens.refreshToken);
    } catch (error: any) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: `Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  const handleRenderButton = (element: HTMLDivElement | null) => {
    if (element && isGoogleLoaded && window.google) {
      window.google.accounts.id.renderButton(element, {
        theme: 'outline',
        size: 'large',
        width: 300,
        text: 'signin_with',
      });
    }
  };

  const handleClearSession = () => {
    setResult(null);
    setStatus(null);
    setLastSignInAt(null);
    setShowFullTokens(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  const handleResetBackendUrl = () => {
    setBackendUrl(BACKEND_URL);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full bg-slate-900/70 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-2">
            Google Sign-In Test Console
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Verify that your Google OAuth integration and backend authentication flow are working correctly.
          </p>
        </div>

        {/* Backend URL Configuration */}
        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <label htmlFor="backend-url" className="block text-sm font-semibold text-slate-200">
              Backend URL
            </label>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${
                backendUrl.includes('localhost')
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                  : 'border-sky-500/40 bg-sky-500/10 text-sky-200'
              }`}
            >
              {backendUrl.includes('localhost') ? 'Localhost environment' : 'Remote environment'}
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              id="backend-url"
              value={backendUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBackendUrl(e.target.value)}
              placeholder="http://localhost:4000"
              className="flex-1 rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
            />
            <button
              type="button"
              onClick={handleResetBackendUrl}
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Sign in with Google
          </p>
          <div className="flex items-center justify-center">
            {isGoogleLoaded ? (
              <div className="flex flex-col items-center gap-3">
                <div ref={handleRenderButton} id="google-signin-button"></div>
                <p className="text-[11px] text-slate-500">
                  We never see your password. A secure ID token is sent directly to your backend.
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-3 text-slate-400">
                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-sm">Loading Google Identity Services…</span>
              </div>
            )}
          </div>
        </div>

        {/* Status Messages */}
        {status ? (
          <div
            className={`mb-4 rounded-2xl border px-4 py-3 text-sm ${
              status.type === 'success'
                ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-50'
                : status.type === 'error'
                ? 'border-rose-500/50 bg-rose-950/40 text-rose-50'
                : 'border-sky-500/50 bg-sky-950/40 text-sky-50'
            }`}
          >
            <div className="flex items-center gap-2">
              {loading && (
                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span className="font-medium">{status.message}</span>
            </div>
          </div>
        ) : (
          <div className="mb-4 rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-400">
            No active session yet. Sign in with Google to see user details and tokens.
          </div>
        )}

        {/* Result Display */}
        {result && (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-5">
            <h3 className="text-base font-semibold text-slate-100 mb-1">Response</h3>

            {/* User Info */}
            <div className="mb-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">User</h4>
              <div className="flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
                {result.user.avatar && (
                  <img
                    src={result.user.avatar}
                    alt={result.user.name}
                    className="w-14 h-14 rounded-full border border-slate-700 object-cover"
                  />
                )}
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-100">{result.user.name}</p>
                  <p className="text-xs text-slate-400">{result.user.email}</p>
                  <p className="text-[11px] text-slate-500">ID: {result.user.id}</p>
                  {lastSignInAt && (
                    <p className="text-[11px] text-slate-500">Last sign-in: {lastSignInAt}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Tokens (Truncated) */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Tokens</h4>
                <button
                  type="button"
                  onClick={() => setShowFullTokens((prev) => !prev)}
                  className="ml-auto inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200"
                >
                  {showFullTokens ? 'Hide full tokens' : 'Show full tokens'}
                </button>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-slate-400 mb-1">Access Token</p>
                  <code className="block max-h-24 overflow-y-auto rounded-lg bg-slate-950/70 p-2 text-[11px] text-emerald-200 break-all">
                    {showFullTokens
                      ? result.tokens.accessToken
                      : `${result.tokens.accessToken.substring(0, 80)}...`}
                  </code>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Refresh Token</p>
                  <code className="block max-h-24 overflow-y-auto rounded-lg bg-slate-950/70 p-2 text-[11px] text-emerald-200 break-all">
                    {showFullTokens
                      ? result.tokens.refreshToken
                      : `${result.tokens.refreshToken.substring(0, 80)}...`}
                  </code>
                </div>
              </div>
            </div>

            {/* Stored in localStorage indicator */}
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
              <p className="text-xs text-slate-300">
                ✓ Tokens are saved in <span className="font-semibold">localStorage</span> for this browser.
              </p>
              <button
                type="button"
                onClick={handleClearSession}
                className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-900 hover:bg-white/90"
              >
                Clear session
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400">
          <p className="text-sm font-semibold text-slate-200 mb-2">Instructions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Verify the backend URL (local, staging, or production).</li>
            <li>Click the Google Sign-In button and select an account.</li>
            <li>Review the user and token details in the response panel above.</li>
            <li>Open DevTools (F12) to inspect the full raw tokens and network calls.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

