import Header from "@components/Header";
import TabBar from "@components/TabBar";
import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react"
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
      <ChakraProvider value={defaultSystem}>
        {/* ChakraProvider 안에 자식 요소들을 넣어야 합니다 */}
        <div className="container mx-auto flex h-[100vh] min-w-[390px] max-w-[410px] flex-col">
          <Header />
          <Outlet />
          <TabBar />
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
