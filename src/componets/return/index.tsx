import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';
import { ArrowBackIco, BoxIcon, ContainerReturn } from './styled';

interface ReturnButtonProps {
  link: string;
  children: ReactNode;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ link, children }) => {
  return (
    <ContainerReturn>
      <Link to={link}>
        <BoxIcon>
        <ArrowBackIco />
        </BoxIcon>
      <p>{children}</p>
      </Link>
    </ContainerReturn>
  );
};

export default ReturnButton;
