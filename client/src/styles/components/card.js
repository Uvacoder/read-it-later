import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const Container = styled.li`
  background-color: ${(props) => props.theme.colours.darkerBlue};
  border-radius: 5px;
  border-bottom: 5px solid ${(props) => props.theme.colours.yellow};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  a {
    display: inline-block;
    padding: 2rem;
    width: 100%;
    min-height: 170px;
    font-size: 1.5rem;
  }
`;
