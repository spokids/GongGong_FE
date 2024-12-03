import Header from "@components/Header";
import TabBar from "@components/TabBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container max-w-[410px] min-w-[390px] mx-auto flex flex-col h-[100vh]">
        <Header />
        <Outlet />
        <TabBar />
      </div>
    </QueryClientProvider>
  );
};

export default App;
