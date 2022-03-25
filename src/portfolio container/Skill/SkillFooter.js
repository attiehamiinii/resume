import { Box, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { SimpleGrid } from '@chakra-ui/react'
import { HiOutlineCode } from 'react-icons/hi';
import { IoBarbellSharp, IoMusicalNotes, IoPawSharp } from 'react-icons/io5';
export default function SkillFooter() {
  const scrollRef = useRef(null);
  return (
    <Box
      bg="#ff4a57"
      color="white"
      w={[300, 400, 500, 970, 1024, 1940]}
      m="auto"
      p="10px"
    textAlign='center'
    >
      <SimpleGrid columns={[2, null, 4]}  >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <Box pt="15px" display='inline-block' >
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
        <Box color="#1f2235" pt="15px" >
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
        <Box color="#1f2235" pt="15px" >
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
        <Box color="#1f2235" pt="15px" >
          <IoBarbellSharp fontSize="3em" />
          <Text color="#1f2235" fontSize="1.2em" fontWeight="bold">
            GYM
          </Text>
        </Box>
      </motion.div>
    </SimpleGrid>
    </Box>
  );
}
