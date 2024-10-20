import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.tsx";
import { store } from "./utils/store.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster position="bottom-left" />
        <App />
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
