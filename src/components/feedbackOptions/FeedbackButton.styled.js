import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${p => {
    if (p.optionType === 'good') {
      return p.theme.colors.good;
    }
    if (p.optionType === 'bad') {
      return p.theme.colors.bad;
    } else if (p.optionType === 'neutral') {
      return p.theme.colors.neutral;
    }
  }};
  :hover {
    background-color: ${p => {
      if (p.optionType === 'good') {
        return p.theme.hoverColors.good;
      }
      if (p.optionType === 'bad') {
        return p.theme.hoverColors.bad;
      } else if (p.optionType === 'neutral') {
        return p.theme.hoverColors.neutral;
      }
    }};
  }
`;
