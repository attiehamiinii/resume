import React from 'react';
import { Button, Text, Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { BsDownload } from 'react-icons/bs';

export default function Skill() {
  return (
    <Box p={[50]}>
      <Box align="center" justify="center" w={[300, 400, 500, 970, 1024, 1940]}>
        <span style={{ color: '#ff4a57', fontSize: '1.5em' }}>i'm expert on</span>
        <Heading mt={[12]} as="h3" size="lg" fontWeight="bold" fontFamily="revert">
          Let's Work Together
        </Heading>
        <Button
          _hover={{
            bg: '#32354b',
            color: '#ff4a57',
          }}
          bgColor="#ff4a57"
          color="#ffffff"
          colorScheme="#ffffff"
          size="md"
          height="45px"
          width="150px"
          mt="10"
          fontSize="15px"
          fontWeight="semibold"
          border="none"
          borderRadius="30"
          fontFamily="Signika Negative"
          leftIcon={<BsDownload />}
        >
          Get Resume
        </Button>
      </Box>

      <Box pt="30px" w={[300, 400, 500, 970, 1024, 1940]} align="center" justify="center" >
        <Box justify="center" display="inline-block"  pr={[45]} justifyItems='center'>
          <Text
            mb="0"
            fontSize="1em"
            fontStyle="italic"
            fontWeight="semibold"
            fontFamily="Signika Negative"
            color="#1f2235"
            position="absolute"
          >
            HTML/CSS
          </Text>
          <motion.div whileHover={{ opacity: 0.5, y: '+20%' }}>
            <CircularProgress
              value={95}
              color="#1f2235"
              size="120px"
              thickness="8px"
              capIsRound="true"
            >
              <CircularProgressLabel textAlign="center" color="#1f2235">
                95%
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Box>
        <Box justify="center" display="inline-block" pr={[45]} justifyItems='center'>
          <Text
            mb="0"
            fontSize="1em"
            fontStyle="italic"
            fontWeight="semibold"
            fontFamily="Signika Negative"
            color="#1f2235"
            position="absolute"
          >
            JAVASCRIPT
          </Text>
          <motion.div whileHover={{ opacity: 0.5, y: '+20%' }}>
            <CircularProgress
              value={85}
              color="#1f2235"
              size="120px"
              thickness="8px"
              capIsRound="true"
            >
              <CircularProgressLabel textAlign="center" color="#1f2235">
                85%
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Box>
        <Box justify="center" display="inline-block"  pr={[45]} justifyItems='center'>
          <Text
            mb="0"
            fontSize="1em"
            fontStyle="italic"
            fontWeight="semibold"
            fontFamily="Signika Negative"
            color="#ff4a57"
            position="absolute"
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
            >
              <CircularProgressLabel textAlign="center" color="#ff4a57" >
                70%
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Box>
        <Box justify="center" display="inline-block" pr={[45]} justifyItems='center' >
          <Text
            mb="0"
            fontSize="1em"
            fontStyle="italic"
            fontWeight="semibold"
            fontFamily="Signika Negative"
            color="#ff4a57"
            position="absolute"
          >
            Bootstarp/Typescript
          </Text>
          <motion.div whileHover={{ opacity: 0.5, y: '-20%' }}>
            <CircularProgress
              value={60}
              color="#ff4a57"
              size="120px"
              thickness="8px"
              capIsRound="true"
            >
              <CircularProgressLabel textAlign="center" color="#ff4a57">
                60%
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Box>
        <Box justify="center" display="inline-block" pr={[45]} justifyItems='center' >
          <Text
            mb="0"
            fontSize="1em"
            fontStyle="italic"
            fontWeight="semibold"
            fontFamily="Signika Negative"
            color="#1f2235"
            position="absolute"
          >
            Nodjs/Express
          </Text>
          <motion.div whileHover={{ opacity: 0.5, y: '+20%' }}>
            <CircularProgress
              value={50}
              color="#1f2235"
              size="120px"
              thickness="8px"
              capIsRound="true"
            >
              <CircularProgressLabel textAlign="center" color="#1f2235">
                50%
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Box>
        <Box justify="center" display="inline-block" pr={[45]} justifyItems='center' >
          <Text
            mb="0"
            fontSize="1em"
            fontStyle="italic"
            fontWeight="semibold"
            fontFamily="Signika Negative"
            color="#1f2235"
            position="absolute"
          >
            Adobe suite
          </Text>
          <motion.div whileHover={{ opacity: 0.5, y: '-20%' }}>
            <CircularProgress
              value={65}
              color="#1f2235"
              size="120px"
              thickness="8px"
              capIsRound="true"
              position="relative"
            >
              <CircularProgressLabel textAlign="center" color="#1f2235">
                65%
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
