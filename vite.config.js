import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // 서버 시작 시 자동으로 브라우저 열기
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
});
