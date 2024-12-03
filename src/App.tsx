import React from "react";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto flex h-[100vh] min-w-[390px] max-w-[410px] flex-col">
        <Header />
        <Outlet />
        <TabBar />
      </div>
    </QueryClientProvider>
  );
};

export default App;