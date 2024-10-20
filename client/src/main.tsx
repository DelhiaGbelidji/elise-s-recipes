import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.tsx";
import { store } from "./utils/store.ts";
import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Toaster position="bottom-left" />
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
