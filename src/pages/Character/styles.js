import styled, {keyframes, css} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  ${css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  flex: 1;
  background: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 30px;

  position: relative;

  h1 {
    font-size: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  > span {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    text-align: center;
    color: #447ae5;
  }

  > p {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    text-align: center;
    color: #666;
  }
`;

export const CharacterDetails = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    min-width: 186px;

    @media (max-width: 524px) {
      margin: 0 auto;
    }

    > div {
      margin-left: 8px;
      display: flex;
      align-items: center;
      flex-direction: column;

      > span {
        display: flex;
        flex: 1;
        width: 100%;
        font-size: 12px;
        color: #888;
      }

      p {
        display: flex;
        flex: 1;
        width: 100%;
        font-size: 15px;
        text-transform: capitalize;

        span {
          color: ${props => (props.isOnline ? '#3A3' : '#f33')};
        }
      }
    }
  }
`;

export const BackButton = styled.div`
  position: absolute;

  left: 10px;
  top: 10px;

  display: flex;
  align-items: center;

  a {
    font-size: 14px;
    color: #447ae5;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #227;

      svg {
        fill: #227;
      }
    }

    svg {
      margin-right: 4px;
    }
  }
`;
