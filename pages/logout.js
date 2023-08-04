// pages/logout.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    axios.get('/api/logout')
      .then(() => router.push('/'))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Logout Page</h1>
      {/* Add a logout button that triggers the logout API */}
    </div>
  );
}
