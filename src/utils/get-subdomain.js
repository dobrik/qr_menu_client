export const getSubdomainFromHost = (host) => {
  if (!host) return null;

  const parts = host.split(".");
  if (host.includes("localhost")) {
    return parts[0]; // e.g. test.localhost:3000
  }

  if (parts.length >= 3) {
    return parts[0]; // e.g. test.menu.lcom → "test"
  }

  return null;
};
