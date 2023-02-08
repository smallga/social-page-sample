import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

const localEnabled = process.env.USE_MOCK === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.tsx",
  }),
  viteMockServe({
    mockPath: './src/server/mock',
    injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
  `,
    localEnabled: localEnabled,
    logger: false, //是否在控制台顯示請求日誌
    supportTs: true,
  }),
  ],
})
