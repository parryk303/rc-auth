// pages/login.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;
    if (code) {
      // Handle the code received after authentication
      router.push('/api/login?code=' + code);
    }
  }, [router.query]);

  const handleLogin = () => {
    // Redirect the user to the RingCentral authorize URI
    window.location.href = '/api/login';
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login with RingCentral</button>
    </div>
  );
}
