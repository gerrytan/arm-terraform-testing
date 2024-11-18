const getEnvVar = (envVar, maskValue) => {
  const value = process.env[envVar];
  if (!value) {
    throw new Error(`Environment variable ${envVar} is not set`);
  }
  const valueForLogging = maskValue ? "*".repeat(10) : value;
  console.log(`Environment variable ${envVar} is set to ${valueForLogging}`);
  return value;
};

export { getEnvVar };
