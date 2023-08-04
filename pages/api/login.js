// pages/api/login.js

import { createRingCentralClient } from '../../lib/ringcentral';

export default async function handler(req, res) {
  const rc = createRingCentralClient();
  const { code } = req.query;

  try {
    if (code) {
      const token = await rc.authorize({ code });
      // Store the token or user info in cookies or session
      res.status(200).json({ success: true });
    } else {
      const authorizeUri = rc.authorizeUri({
        redirectUri: 'YOUR_REDIRECT_URI', // The URL where RingCentral should redirect back after authentication
      });
      res.redirect(authorizeUri);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during authentication.' });
  }
}
