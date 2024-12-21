import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tilewindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    postcss:{
        plugins :[
            tilewindcss()
        ]
    }
  },
  server: {
    port: 3000,
  },
});
