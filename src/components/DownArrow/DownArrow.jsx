import { styled, keyframes } from 'styled-components';

function DownArrow({refElement}) {

    const handleClick = () => {
        if (refElement.current) {
            refElement.current.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <ArrowWrapper>
      <ArrowContainer onClick={handleClick} aria-label="Scroll to next section">&#8595;</ArrowContainer>
    </ArrowWrapper>
  );
}

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0;
`;

const scaleAnimation = keyframes`
  0% {
    transform: scaleY(1.1);
  }
  50% {
    transform: scaleY(1.2);
  }
  100% {
    transform: scaleY(1.3);
  }

  50% {
    transform: scaleY(1.2);
  }

  0% {
    transform: scaleY(1.1);
  }
`;

const ArrowContainer = styled.button`
  color: var(--font-light);
  background-color: transparent;
  border: 2px solid var(--primary);
  font-size: 2rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 1s ease;
  transform-origin: top;
  box-shadow: 0 0 10px var(--primary);

  &:hover {
    animation: ${scaleAnimation} 1s forwards;
  }
`;

export default DownArrow;