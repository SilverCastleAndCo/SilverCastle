export const msalConfig = {
  auth: {
    clientId: import.meta.env.NX_CLIENT_ID,
    authority: import.meta.env.NX_AUTHORITY,
    redirectUri: import.meta.env.NX_REDIRECT_URI,
  }
};

