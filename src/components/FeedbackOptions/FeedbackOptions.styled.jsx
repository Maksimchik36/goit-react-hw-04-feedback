import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: red;
  font-weight: 600;
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 10px;
  border-color: #5a85d6;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
`