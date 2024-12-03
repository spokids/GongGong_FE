import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  root: "./",
  build: {
    // rollupOptions: {
    //   input: "/src/main.tsx",
    // },
    rollupOptions: {
            input: "/src/main.tsx",
            output:{
              manualChunks(id) {
                if (id.includes('node_modules')) {
                    const packageName = id.toString().split('node_modules/')[1].split('/')[0].toString();
                    // 특정 조건으로 더 큰 청크 그룹화
                    if (['react', 'react-dom'].includes(packageName)) {
                        return 'react-vendor';
                    }
                    return 'vendor';
                }
            }            
            }
        }
  },
});
