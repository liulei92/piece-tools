import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/piece-tools.ts'),
      name: 'PieceTools',
      // 构建好的文件名前缀
      fileName: 'piece-tools',
    },
  },
  // 自动生成d.ts
  plugins: [dts()],
});
