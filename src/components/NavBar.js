import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Clear_Logo from '../components/img/logo.jpg'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <a href='/'>
              <Flex>
                <Avatar size='sm' name='Logo' src={Clear_Logo} />
                <Text paddingLeft={'8px'} fontSize={'20px'} fontWeight={600}>
                  KMSS
                </Text>
              </Flex>
            </a>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} alt={"dark-light toogle button"} aria-label={"dark mode toogle button"}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            About Us
          </Button> */}
          <Button
            display={{ base: 1, md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.500'}
            href={'/blog'}
            alt={"blog button"}
            _hover={{
              bg: 'green.400',
            }}>
            Blog
          </Button>
        </Stack>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}