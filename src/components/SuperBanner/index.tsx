import { Button, ButtonGroup, Image, Text, VStack } from '@chakra-ui/react'
import { GrPlayFill } from 'react-icons/gr'
import { BiInfoCircle } from 'react-icons/bi'

const SuperBanner = () => {
  return (
    <VStack
      pos="relative"
      h="90vh"
      overflowY="hidden"
      justifyContent="center"
      align="start"
      mb="-6vw"
    >
      <Image
        src="/img/superbanner/colin.webp"
        alt="Superbanner"
        pos="absolute"
        w="100%"
        top="0"
      />
      <VStack pl={24} zIndex={1} align="start" maxW="36%">
        <Image
          src="/img/superbanner/title-colin.webp"
          alt="Colin em Preto e Branco"
        />
        <Text
          fontSize="1.6vw"
          color="white"
          textShadow="2px 2px 4px rgb(0 0 0 / 45%)"
          m="1vw 0"
          fontWeight={700}
        >
          Assista à minissérie agora
        </Text>
        <Text
          fontSize="1.4vw"
          color="white"
          textShadow="2px 2px 4px rgb(0 0 0 / 45%)"
          m="1vw 0"
          fontWeight={400}
        >
          Colin Kaepernick narra esta série que relembra seus tempos de escola e
          conta suas experiências com questões de raça, classe e cultura.
        </Text>
        <ButtonGroup spacing={6}>
          <Button
            variant="netflix-white"
            iconSpacing={4}
            leftIcon={<GrPlayFill />}
          >
            Assistir
          </Button>
          <Button
            variant="netflix-gray"
            iconSpacing={4}
            leftIcon={<BiInfoCircle />}
          >
            Mais informações
          </Button>
        </ButtonGroup>
      </VStack>
    </VStack>
  )
}

export default SuperBanner
