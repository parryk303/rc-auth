// lib/ringcentral.js

import RingCentral from '@ringcentral/sdk';

export const createRingCentralClient = () => {
  return new RingCentral({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL,
  });
};
