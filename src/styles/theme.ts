import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    netflix: {
      red: '#E50914',
      bg: '#141414'
    }
  },
  fonts: {
    heading: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        bg: 'netflix.bg'
      }
    }
  }
})

export default theme
