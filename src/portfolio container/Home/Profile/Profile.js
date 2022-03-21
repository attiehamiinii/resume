import React from 'react';
import { motion } from 'framer-motion';
import coverLetter from '../../../assets/Home/cover.pdf';
import './Profile.css';
import Typical from 'react-typical'
import {  Button, Stack } from '@chakra-ui/react';
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/atieh.amini" rel="noreferrer" target="_blank">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/atieh-amini-151630138/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/attiehamiinii" rel="noreferrer" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlited-text">ATIEH</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {''}
              <h1>
                {''}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Ethusiastic Dev ',
                    3000,
                    'Frontend Developer',
                    3000,
                    'React/Redux Developer',
                    3000,
                    'Designer',
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Web Developer I design and build applications
              </span>
            </span>
          </div>
          <Stack spacing={40} direction="row" justify="center">
            <motion.div
              whileHover={{ scale: [1, 0.7, 1] }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <a href={coverLetter} download="cover letter.pdf">
                <Button
                  _hover={{
                    background: '#ffffff',
                    color: '#32354b',
                    borderColor: '#ff4a57',
                  }}
                  boxShadow="md"
                  background="#32354b"
                  color="#ffffff"
                  colorScheme="#32354b"
                  height="48px"
                  width="150px"
                  m="0"
                  fontSize="20px"
                  fontWeight="semibold"
                  borderColor="#ffffff"
                  borderRadius="30"
                  font-family= 'Signika Negative'
                >
                  Hire Me
                </Button>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: [1, 0.7, 1], color: 'aliceblue', Color: '#1f2235' }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <a href="resume2022-2.pdf " download="atieh amini.pdf">
                <Button
                  _hover={{
                    background: '#32354b',
                    color: '#ff4a57',
                    borderColor:'#ff4a57'
                  }}
                  boxShadow="md"
                  background="#ff4a57"
                  color="#ffffff"
                  colorScheme="#32354b"
                  size="md"
                  height="48px"
                  width="150px"
                  m="0"
                  fontSize="20px"
                  fontWeight="semibold"
                 borderColor='#ff4a57'
                  borderRadius="30"
                  font-family= 'Signika Negative'
                >
                  Get Resume
                </Button>
              </a>
            </motion.div>
          </Stack>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
