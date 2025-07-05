import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const RibbonContainer = styled.div`
  width: 100%;
  height: 7.71vw;
  background-color:#B47A4C;
  overflow: hidden;
  position: relative;

   @media (max-width: 767px) {
    height: 15.47vw; /* Пример адаптивного размера */
  }

  @media (max-width: 437px) {
    height: 18.47vw; /* Пример адаптивного размера */
  }

  @media (max-width: 373px) {
    height: 20.47vw; /* Пример адаптивного размера */
  }
`;

const RibbonContent = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  animation: ${scroll} 380s linear infinite;
  position: absolute;
`;

const RibbonItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.53vw;

  @media (max-width: 767px) {
    margin-right: 2.54vw; /* Пример адаптивного размера */
  }
`;

const LogoText = styled.span`
  color: white;
  font-size: 3.61vw;
  font-weight: bold;
  margin-right: 1.53vw;

  @media (max-width: 767px) {
    margin-right: 2.54vw; /* Пример адаптивного размера */
    font-size: 5.85vw;
  }
`;

const InfiniteRibbon = () => {
  // Создаем массив из 10 элементов для заполнения ленты
  const items = Array(100).fill(null);
  
  return (
    <RibbonContainer>
      <RibbonContent>
        {items.map((_, index) => (
          <RibbonItem key={index}>
            <LogoText>Сервисторг</LogoText>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M24.1853 3.50486C24.0058 7.3289 23.8316 8.56615 23.189 10.5817C21.2678 16.6079 16.5176 21.3448 10.4747 23.2607C8.46472 23.898 7.21883 24.0742 3.44638 24.255C1.55094 24.3459 0 24.4562 0 24.4999C0 24.5437 1.58151 24.6533 3.51462 24.7435C7.31779 24.921 8.61786 25.1192 10.8563 25.8629C13.6759 26.7996 16.1213 28.331 18.3556 30.5593C20.653 32.8503 22.1748 35.3033 23.134 38.2623C23.8294 40.4078 24.0022 41.5964 24.1853 45.4951C24.2757 47.4229 24.3866 49 24.4316 49C24.4767 49 24.5869 47.3923 24.6768 45.4271C24.8496 41.6448 25.0461 40.3051 25.7355 38.2088C27.6267 32.4583 32.2966 27.7601 38.0072 25.8629C40.2646 25.1129 41.5385 24.9206 45.4171 24.7443C47.3876 24.6548 49 24.5448 49 24.4999C49 24.4549 47.4185 24.3444 45.4854 24.2542C41.6507 24.0752 40.41 23.9015 38.3888 23.2607C32.4342 21.3728 27.6722 16.6799 25.7355 10.7912C25.0461 8.69491 24.8496 7.35517 24.6768 3.57292C24.5869 1.60788 24.4767 0 24.4316 0C24.3866 0 24.2757 1.57726 24.1853 3.50486Z" 
                fill="white"
              />
            </svg>
          </RibbonItem>
        ))}
      </RibbonContent>
    </RibbonContainer>
  );
};

export default InfiniteRibbon;