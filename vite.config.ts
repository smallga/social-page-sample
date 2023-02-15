import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import svgr from "vite-plugin-svgr";

const localEnabled = process.env.USE_MOCK === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  base:'social-page-sample/dist',
  plugins: [react({
    include: "**/*.tsx",
  }),
  viteMockServe({
    mockPath: './src/server/mock',
    injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
  `,
    prodEnabled: true,
    localEnabled: localEnabled,
    logger: false, //是否在控制台顯示請求日誌
    supportTs: true,
  }),svgr(),
  ],
})
