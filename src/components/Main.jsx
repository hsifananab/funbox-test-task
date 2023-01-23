import styled from 'styled-components';
import { products } from '../data';
import { Card } from './Card';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 5e-5) 49.88%,
    rgba(0, 0, 0, 0.5) 100%
  );

  @media (max-width: 1019px) {
    height: 100%;
  }
`;

const Title = styled.h1`
  font-weight: var(--fw-thin);
  text-align: center;
`;

const CardsWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  max-width: 1120px;
  width: 100%;

  @media (max-width: 1019px) {
    flex-wrap: wrap;
    gap: 40px 20px;
  }
`;

export const Main = () => {
  return (
    <Wrapper>
      <Title>Ты сегодня покормил кота?</Title>
      <CardsWrapper>
        {products.map(product => (
          <Card key={product.taste + product.weight} {...product} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};
