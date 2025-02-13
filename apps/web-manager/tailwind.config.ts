import type { Config } from 'tailwindcss'
import tailwindConfig from '../../libs/ui/tailwind.config'
const config: Config = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{ts,tsx}', '../../libs/ui/**/*.{ts,tsx}'],
}
export default config
