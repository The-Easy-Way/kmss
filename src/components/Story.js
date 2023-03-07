// import SanityBlockContent from '@sanity/block-content-to-react';
import BlockContent from "@sanity/block-content-to-react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  // Divider,
  HStack,
  Tag,
  // Wrap,
  // WrapItem,
  // SpaceProps,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from "@sanity/image-url";


const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" bg="red.500" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={props.title}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.publishedAt.split('T')[0]}</Text>
    </HStack>
  );
};



export const Story = () => {
  const [storiesData, setStories] = useState(null);


  const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

 
  let address = window.location.pathname;
  if (address === "/"){
      useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "stories"][0...1] | order(publishedAt desc){
            title,
            slug,
            body,
            discription,
            publishedAt,
            tags,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            },
            "name": author->name,
            "authorImage": author->image,
          }`
          )
          .then((data) => setStories(data))
          .catch(console.error);
      }, []);
  }else{
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "stories"]{
          title,
          slug,
          body,
          discription,
          publishedAt,
          tags,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          "name": author->name,
          "authorImage": author->image,
        }`
        )
        .then((data) => setStories(data))
        .catch(console.error);
    }, []);
  }

  return (
    
    <Container maxW={'7xl'} 
    p="12"
    >
      <Heading as="h1">Stories by KMSS Maths Club</Heading>
      {storiesData &&
          storiesData.map((stories, index) => (
      <article>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
          <Link href={"/stories/" + stories.slug.current} key={stories.slug.current} textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                maxH={"90vh"}
                margin={"auto auto 25px auto"}
                borderRadius="lg"
                src={stories.mainImage.asset.url}
                alt={stories.mainImage.alt}
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <BlogTags tags={stories.tags} />
          <Heading marginTop="1">
          <Link href={"/stories/" + stories.slug.current} key={stories.slug.current} textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {stories.title}
            </Link>
          </Heading>
          <Text margin={'0 0 10px 0px'}></Text>
          
          <BlockContent blocks={stories.discription} projectId="41vjc7q7" dataset='production' />
          <Text margin={'0 0 10px 0px'}></Text>

          <BlogAuthor 
          name={stories.name}
          publishedAt={stories.publishedAt}
          image={
            urlFor(stories.authorImage).url()
          }
          />

        </Box>
      </Box>
      </article>
          ))}
      
    </Container>
  );
};

export default Story;
