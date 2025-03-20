import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';

// Import your images
import gallery1 from '../img/bee.webp';
import gallery2 from '../img/butterfly.jpeg';
import gallery3 from '../img/bug.jpeg';
import gallery4 from '../img/nature1.jpeg';
import gallery5 from '../img/nature2.jpg';
import gallery6 from '../img/nature3.jpeg';
import gallery7 from '../img/portrait1.jpg';
import gallery8 from '../img/portrait2.jpg';
import gallery9 from '../img/portrait3.jpg';

const Gallery = () => {
  return (
    <GalleryStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Our Gallery.</motion.h2>
        </Hide>
      </Title>
      <GalleryGrid>
        {[
          gallery1,
          gallery2,
          gallery3,
          gallery4,
          gallery5,
          gallery6,
          gallery7,
          gallery8,
          gallery9,
        ].map((image, index) => (
          <ImageCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={image} alt={`gallery-${index + 1}`} />
          </ImageCard>
        ))}
      </GalleryGrid>
    </GalleryStyle>
  );
};

const GalleryStyle = styled(motion.div)`
  min-height: 90vh;
  padding: 5rem 10rem;
  text-align: center;
  h2 {
    color: white;
    padding-bottom: 3rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const ImageCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
  }
`;

export default Gallery;
