// pages/api/logout.js

import { createRingCentralClient } from '../../lib/ringcentral';

export default async function handler(req, res) {
  // Clear the token or user info from cookies or session
  res.status(200).json({ success: true });
}
