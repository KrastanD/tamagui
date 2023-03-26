import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

const shouldExtract = process.env.EXTRACT === '1'

if (shouldExtract) {
  console.log(`Compiler enabled`)
}

const tamaguiConfig = {
  components: ['sandbox-ui', 'tamagui'],
  config: 'tamagui.config.ts',
  useReactNativeWebLite: true,
}

export default defineConfig({
  clearScreen: true,
  plugins: [
    babel({
      babelConfig: {
        plugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    }),
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
})
