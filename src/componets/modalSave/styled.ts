import styled, { keyframes } from "styled-components";

export const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  padding: 20px;
  max-width: 25rem;
  position: relative;
  width: 25rem;
  justify-content: center;
  height: 12rem;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.sora};
  .check-icon {
    animation: ${bounceAnimation} 1s ease infinite;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
