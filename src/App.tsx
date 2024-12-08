import Header from "@components/Header";
import TabBar from "@components/TabBar";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import routes from "constants/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true,
    },
  },
});

const App: React.FC = () => {
  const location = useLocation();

  const showTabBar = location.pathname === routes.homePage ||  location.pathname.includes("chat");
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <div className="mx-auto flex h-[100vh] min-w-[390px] max-w-[410px] flex-col mt-5">
          <Header />
          <Outlet />
          {showTabBar && <TabBar />} 
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
