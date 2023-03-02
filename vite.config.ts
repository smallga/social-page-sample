import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import svgr from "vite-plugin-svgr";
import type { InlineConfig } from 'vitest';

const localEnabled = process.env.USE_MOCK === 'true';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
})
