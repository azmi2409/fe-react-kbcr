interface Config {
  apiUrl: string;
  apiKey: string;
}

// Path: src/config.ts
const config: Config = {
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:8090",
  apiKey: import.meta.env.VITE_API_KEY || "key",
};

export default config;
