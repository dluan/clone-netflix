import NextLink from 'next/link'
import {
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  VStack,
  WrapItem
} from '@chakra-ui/react'

type ProfileBoxProps = {
  id: number
  name: string
}

const ProfileBox = ({ id, name }: ProfileBoxProps) => (
  <LinkBox
    as={WrapItem}
    _hover={{
      '&>div div:after': { borderColor: 'netflix.ice' },
      '&>div a': { color: 'netflix.ice' }
    }}
  >
    <VStack>
      <Box
        pos="relative"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '4px solid transparent',
          borderRadius: '4px'
        }}
      >
        <Image
          boxSize="19.2rem"
          src={`/img/profile-${id}.png`}
          objectFit="cover"
          borderRadius={4}
        />
      </Box>
      <NextLink href={'/catalog'} passHref>
        <LinkOverlay fontSize="2.4rem" color="grey">
          {name}
        </LinkOverlay>
      </NextLink>
    </VStack>
  </LinkBox>
)

export default ProfileBox
