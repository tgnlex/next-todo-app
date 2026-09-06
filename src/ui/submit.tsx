import styled from 'styled-components';


const Submit = styled.button`
  --pad: 0.2rem;
  --ml: 0.6rem;
  margin-left: var(--ml);
  padding: var(--pad);

  &:hover {
    cursor: pointer;
  }
`;

export default Submit;
