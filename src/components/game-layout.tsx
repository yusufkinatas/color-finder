import { ReactNode } from 'react'
import { Box, Flex, Heading, Text } from 'theme-ui'

import { SoundButton } from './sound-button'

export const GameLayout = ({ children }: { children: ReactNode }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100svh',
      px: [3, 4],
      backgroundColor: 'background',
      position: 'relative',
    }}
  >
    <Box
      as="header"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
        alignItems: 'center',
        gap: 3,
        width: '100%',
        maxWidth: 1080,
        mx: 'auto',
        py: ['16px', '24px'],
        borderBottom: '1px solid',
        borderColor: 'border',
      }}
    >
      <Box sx={{ gridColumn: 2, textAlign: 'center' }}>
        <Heading as="h1" sx={{ fontSize: 2, fontWeight: 600 }}>
          Color Finder
        </Heading>
        <Text
          as="p"
          sx={{ display: ['none', 'block'], mt: '2px', fontSize: '13px', color: 'muted' }}
        >
          Find the different colored square
        </Text>
      </Box>

      <Box sx={{ justifySelf: 'end' }}>
        <SoundButton />
      </Box>
    </Box>

    <Box as="main" sx={{ flex: 1, py: [4, '40px'] }}>
      {children}
    </Box>
  </Flex>
)
