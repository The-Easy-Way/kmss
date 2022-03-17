import React from 'react';
import './style.css'
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Flex,
    Avatar
  } from '@chakra-ui/react';
  // import { ReactNode } from 'react';
  import YouTubeIcon from '@material-ui/icons/YouTube';
  import TwitterIcon from '@material-ui/icons/Twitter';
  import InstagramIcon from '@material-ui/icons/Instagram';
  import EmailIcon from '@material-ui/icons/Email';
  import Clear_Logo from '../components/img/logo.jpg'
  
  const Logo = () => {
    return (
      <Box>
        <a href='./'>
          <Flex>
            <Avatar size='sm' name='Logo' src={Clear_Logo} />
            <Text paddingLeft={'8px'} fontSize={'20px'} fontWeight={600}>
              KMSS
            </Text>
          </Flex>
        </a>
      </Box>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }
  ) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
                © 2022 KMSS. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <TwitterIcon />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <YouTubeIcon />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <InstagramIcon />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <Text className='foothead'>Club</Text>
              <Link href={'./about'}>About us</Link>
              <Link href={'./blog'}>Blog</Link>
              <Link href={'./contact'}>Contact us</Link>

            </Stack>

            <Stack >
              <Text className='foothead'>Stay up to date</Text>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<EmailIcon />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
