import styled from 'styled-components';

const Chip = styled.span`
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.35em 0.9em;
  margin: 0.25em;
  border: 1px solid var(--primary-transparent);
  border-radius: 4px;
  color: var(--font-light);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 0 8px var(--primary-transparent);
  }
`;

export default function SkillChip({ children }) {
  return <Chip>{children}</Chip>;
}
