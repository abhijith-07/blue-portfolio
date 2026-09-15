import { Github, Linkedin, Mail } from 'lucide-react';
import styled from 'styled-components';

// Real profile / contact links — swap these for the real destinations.
const LINKS = [
  { href: 'https://github.com/abhijith-subash', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com/in/abhijith-subash', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:abhijith.subash@example.com', label: 'Email', Icon: Mail },
];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: var(--font-light);
    background: transparent;
    transition: color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  a:hover,
  a:focus-visible {
    color: var(--primary);
    box-shadow: 0 0 10px var(--primary-transparent);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 480px) {
    gap: 0.75rem;
  }
`;

function SocialLinks({ size = 22 }) {
  return (
    <Wrapper>
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
        >
          <Icon size={size} strokeWidth={1.75} />
        </a>
      ))}
    </Wrapper>
  );
}

export default SocialLinks;
