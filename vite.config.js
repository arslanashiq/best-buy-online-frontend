import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const { VITE_PROXY_URL, VITE_API_URL, VITE_APP_BASE_URL } = loadEnv(
    mode,
    process.cwd()
  );
  let config = {
    base: VITE_APP_BASE_URL,
    plugins: [react()],
    preview: {
      allowedHosts: ["interface"],
    },
    esbuild: {
      loader: "jsx",
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  };

  //extra code for the development environment
  if (mode === "development") {
    config = {
      ...config,
      server: {
        proxy: {
          [VITE_PROXY_URL]: {
            target: VITE_API_URL,
            changeOrigin: true,
            rewrite: (path) => path?.replace(VITE_PROXY_URL, ""),
          },
        },
      },
    };
  }
  return config;
});
