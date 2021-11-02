import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    netflix: {
      red: '#E50914',
      bg: '#141414',
      ice: '#e5e5e5',
      aqua: '#54b9c5'
    }
  },
  components: {
    Button: {
      variants: {
        'netflix-white': {
          height: '5.7rem',
          minWidth: '19.2rem',
          bg: 'white',
          color: 'black',
          px: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2.3rem',
          fontWeight: 'bold',
          _hover: {
            bg: 'rgba(255, 255, 255, 0.75)'
          }
        },
        'netflix-gray': {
          height: '5.7rem',
          minWidth: '19.2rem',
          bg: 'rgba(109, 109, 110, 0.7)',
          color: 'white',
          px: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2.3rem',
          fontWeight: 'bold',
          _hover: {
            bg: 'rgba(109, 109, 110, 0.4)'
          }
        }
      }
    }
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        bg: 'netflix.bg',
        fontFamily:
          '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
      }
    }
  }
})

export default theme
