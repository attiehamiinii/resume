import React from 'react';
import { Button, Text, Box, Flex } from '@chakra-ui/react';
import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

export default function Skill() {
  return (
    <Box p="70px">
      <Grid templateColumns="repeat(5, 1fr)" gap={4} pt="30" pb="50">
        <GridItem colSpan={2}>
          <Box align="center" justify="center">
            <span style={{ color: '#ff4a57', fontSize: '1.5em' }}>i'm expert on</span>
            <Heading mt="12" as="h3" size="lg" fontWeight="bold" fontFamily="revert">
              Let's Work Together
            </Heading>
            <Button
              _hover={{
                background: '#32354b',
                color: '#ff4a57',
                borderColor: '#ff4a57',
              }}
              boxShadow="md"
              background="#ff4a57"
              color="#ffffff"
              colorScheme="#32354b"
              size="md"
              height="48px"
              width="150px"
              mt="12"
              fontSize="20px"
              fontWeight="semibold"
              borderColor="#ff4a57"
              borderRadius="30"
              font-family="Signika Negative"
            >
              Get Resume
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Flex display="inline-block" pl="150px">
            <Text
              mb="0"
              fontSize="1.2em"
              fontStyle="italic"
              fontWeight="semibold"
              fontFamily="Signika Negative"
              position="absolute"
            >
              HTML/CSS/JavaScript
            </Text>
            <motion.div whileHover={{ opacity: 0.5, y: '+20%' }}>
              <CircularProgress
                value={90}
                color="#1f2235"
                size="120px"
                thickness="8px"
                capIsRound="true"
                position="relative"
              >
                <CircularProgressLabel textAlign="center" color="#1f2235">
                  90%
                </CircularProgressLabel>
              </CircularProgress>
            </motion.div>
          </Flex>
          <Flex display="inline-block" pl="125px">
            <Text
              mb="0"
              fontSize="1.2em"
              fontStyle="italic"
              fontWeight="semibold"
              fontFamily="Signika Negative"
              position="absolute"
              color="#ff4a57"
              mt="165"
            >
              React/Redux
            </Text>
            <motion.div whileHover={{ opacity: 0.5, y: '-20%' }}>
              <CircularProgress
                value={70}
                color="#ff4a57"
                size="120px"
                thickness="8px"
                capIsRound="true"
                position="relative"
              >
                <CircularProgressLabel textAlign="center" color="#ff4a57">
                  70%
                </CircularProgressLabel>
              </CircularProgress>
            </motion.div>
          </Flex>
          <Flex display="inline-block" pl="125px">
            <Text
              mb="0"
              fontSize="1.2em"
              fontStyle="italic"
              fontWeight="semibold"
              fontFamily="Signika Negative"
              position="absolute"
              color="#1f2235"
            >
              Typescript/Nodjs
            </Text>
            <motion.div whileHover={{ opacity: 0.5, y: '+20%' }}>
              <CircularProgress
                value={50}
                color="#1f2235"
                size="120px"
                thickness="8px"
                capIsRound="true"
                position="relative"
              >
                <CircularProgressLabel textAlign="center" color="#1f2235">
                  50%
                </CircularProgressLabel>
              </CircularProgress>
            </motion.div>
          </Flex>
          <Flex display="inline-block" pl="125px">
            <Text
              mb="0"
              fontSize="1.2em"
              fontStyle="italic"
              fontWeight="semibold"
              fontFamily="Signika Negative"
              position="absolute"
              color="#ff4a57"
              mt="165"
            >
              Adobe suite
            </Text>
            <motion.div whileHover={{ opacity: 0.5, y: '-20%' }}>
              <CircularProgress
                value={65}
                color="#ff4a57"
                size="120px"
                thickness="8px"
                capIsRound="true"
                position="relative"
              >
                <CircularProgressLabel textAlign="center" color="#ff4a57">
                  65%
                </CircularProgressLabel>
              </CircularProgress>
            </motion.div>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
