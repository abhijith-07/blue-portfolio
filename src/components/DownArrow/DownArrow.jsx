import { styled, keyframes } from 'styled-components';

function DownArrow({ refElement }) {
    const handleClick = () => {
        if (refElement?.current) {
            refElement.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ArrowWrapper>
            <ArrowContainer onClick={handleClick} aria-label="Scroll to next section">
                &#8595;
            </ArrowContainer>
        </ArrowWrapper>
    );
}

const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(6px); }
`;

const scaleAnimation = keyframes`
    0%   { transform: scaleY(1.1); }
    50%  { transform: scaleY(1.2); }
    100% { transform: scaleY(1.1); }
`;

const ArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
`;

const ArrowContainer = styled.button`
    color: var(--font-light);
    background-color: var(--bg-dark);
    border: 2px solid var(--primary);
    font-size: 1.5rem;
    padding: 0.6rem 0.85rem;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 10px var(--primary);
    animation: ${bounce} 2s ease-in-out infinite;

    &:hover {
        animation: ${scaleAnimation} 1s forwards;
        box-shadow: 0 0 18px var(--primary);
    }

    @media screen and (max-width: 900px) {
        font-size: 1.25rem;
        padding: 0.5rem 0.75rem;
    }
`;

export default DownArrow;