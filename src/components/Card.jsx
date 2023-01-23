import { useState } from 'react';
import styled from 'styled-components';
import Cat from '../assets/images/Card/Photo.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 14px;

  @media (max-width: 1019px) {
    width: 40%;

    &:first-child {
      width: 100%;
    }
  }

  @media (max-width: 610px) {
    width: 100%;
  }
`;

const ProductCardBorder = styled.div`
  width: 320px;
  height: 480px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  background: #1698d9;

  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0 100%, 0 10%);
`;

const ProductCard = styled.div`
  max-width: 312px;
  max-height: 472px;
  width: 100%;
  height: 100%;
  padding: 17px 47px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 12px;
  border: none;
  position: relative;
  overflow: hidden;
  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0 100%, 0 10%);

  cursor: pointer;
`;

const CardPreTitle = styled.div`
  color: #666666;

  margin-bottom: 5px;
`;

const CardTitle = styled.h2`
  font-size: 48px;
  font-weight: var(--fw-bold);
`;

const CardTaste = styled.div`
  font-size: 24px;
  font-weight: var(--fw-bold);

  margin-bottom: 15px;
`;

const CardDescription = styled.div`
  color: #666666;
  font-size: 14px;

  & span {
    font-weight: var(--fw-bold);
  }
`;

const CardImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const CardWeight = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 50%;

  color: white;
  background-color: #1698d9;

  & span {
    font-size: 42px;
    line-height: 100%;
  }
`;

const ProductAction = styled.div`
  font-size: 13px;

  & span {
    color: #1698d9;
    font-weight: var(--fw-bold);
    text-decoration: underline dashed;

    cursor: pointer;
  }
`;

const getBonusDescription = bonus => {
  if (bonus < 2) {
    return 'мышь в подарок';
  } else if (bonus >= 2 && bonus < 5) {
    return `мыши в подарок`;
  } else if (bonus >= 5) {
    return `мышей в подарок`;
  }
};

export const Card = ({
  title,
  taste,
  tasteDescription,
  description,
  weight,
  inStock,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const selectHandler = () => (inStock ? setIsSelected(prev => !prev) : null);

  const { amount, bonus, info } = description;
  return (
    <Wrapper>
      <ProductCardBorder
        onClick={selectHandler}
        onMouseEnter={() => (isSelected ? setIsHovered(true) : null)}
        onMouseLeave={() => (isSelected ? setIsHovered(false) : null)}
        style={{
          backgroundColor: isSelected
            ? '#D91667'
            : inStock
            ? '#1698d9'
            : '#B3B3B3',
        }}
      >
        <ProductCard
          style={{
            opacity: inStock ? 1 : 0.5,
          }}
        >
          {isSelected && isHovered ? (
            <CardPreTitle style={{ color: '#E62E7A' }}>
              Котэ не одобряет?
            </CardPreTitle>
          ) : (
            <CardPreTitle>Сказочное заморское яство</CardPreTitle>
          )}

          <CardTitle>{title}</CardTitle>
          <CardTaste>{taste}</CardTaste>
          <CardDescription>
            <div>
              <span>{amount} </span>порций
            </div>
            <div>
              <span>{bonus < 2 ? '' : bonus} </span>
              {getBonusDescription(bonus)}
            </div>
            <div>{info}</div>
          </CardDescription>
          <CardImage src={Cat} />
          <CardWeight
            style={{
              backgroundColor: isSelected
                ? '#D91667'
                : inStock
                ? '#1698d9'
                : '#B3B3B3',
            }}
          >
            <span>{weight}</span>кг
          </CardWeight>
        </ProductCard>
      </ProductCardBorder>
      {isSelected ? (
        <ProductAction>{tasteDescription}</ProductAction>
      ) : inStock ? (
        <ProductAction>
          Чего сидишь? Порадуй котэ, <span onClick={selectHandler}>купи.</span>
        </ProductAction>
      ) : (
        <ProductAction style={{ color: '#FFFF66' }}>
          Печалька, {taste} закончился.
        </ProductAction>
      )}
    </Wrapper>
  );
};
