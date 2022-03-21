import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { HiOutlineCode } from 'react-icons/hi';
import { IoBarbellSharp, IoMusicalNotes, IoPawSharp } from 'react-icons/io5';
export default function SkillFooter() {
  const scrollRef = useRef(null);
  return (
    <Flex bg="#ff4a57" h="110px" color="white" w="100%">
      <Grid gap={250} alignItems="center" justifyItems="center" display="flex" m="auto" pt="10px">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >
          <Box>
            <IoPawSharp fontSize="3em" color="#1f2235" />
            <Text color="#1f2235" fontSize="1.2em" fontWeight="bold">
              {' '}
              PETs
            </Text>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >
          <Box color="#1f2235">
            <IoMusicalNotes fontSize="3em" />
            <Text color="#1f2235" fontSize="1.2em" fontWeight="bold">
              {' '}
              MUSIC
            </Text>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >
          <Box color="#1f2235">
            <HiOutlineCode fontSize="3em" />
            <Text color="#1f2235" fontSize="1.2em" fontWeight="bold">
              WEB
            </Text>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >
          <Box color="#1f2235">
            <IoBarbellSharp fontSize="3em" />
            <Text color="#1f2235" fontSize="1.2em" fontWeight="bold">
              GYM
            </Text>
          </Box>
        </motion.div>
      </Grid>
    </Flex>
  );
}
