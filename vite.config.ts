import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { wrapperEnv } from './build/utils'
// import { OUTPUT_DIR } from './build/constant'
import { createVitePlugins } from './build/vite/plugin'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> pnpm i @types/node -D
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv
  const isBuild = command === 'build'
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        '/@/': pathResolve('src') + '/',
      },
    },
    server: {
      host: true,
      port: VITE_PORT,
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
    },
    // build: {
    //   target: 'es2015',
    //   outDir: OUTPUT_DIR,
    //   terserOptions: {
    //     compress: {
    //       keep_infinity: true,
    //       // Used to delete console in production environment
    //       drop_console: VITE_DROP_CONSOLE,
    //     },
    //   },
    //   // Turning off brotliSize display can slightly reduce packaging time
    //   brotliSize: false,
    //   chunkSizeWarningLimit: 2000,
    // },
    plugins: createVitePlugins(viteEnv, isBuild),
  }
}
