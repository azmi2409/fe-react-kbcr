import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ colorScheme: "light", fontFamily: '"Poppins", sans-serif' }}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
