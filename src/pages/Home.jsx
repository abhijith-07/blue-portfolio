import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

function Home() {
    const headers = ["Abhijith Subash", "Full Stack Developer"]
    const typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 1500
    const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
    const [header, setHeader] = useState('|');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentHeader = headers[currentHeaderIndex];
            if (!isDeleting) {
                // Typing effect
                if (header.length < currentHeader.length + 1) {  // +1 to include the '|'
                    setHeader(currentHeader.substring(0, header.length) + '|');
                } else {
                    // Wait before starting to delete
                    setTimeout(() => setIsDeleting(true), delayBetweenTexts);
                }
            } else {
                // Deleting effect
                if (header.length > 1) {  // Ensure we don't remove the '|'
                    setHeader(currentHeader.substring(0, header.length - 2) + '|');  // -2 to account for '|'
                } else {
                    setIsDeleting(false);
                    setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
                }
            }
        };
        const typingSpeedInterval = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(typingSpeedInterval);
    }, [header, isDeleting, headers, currentHeaderIndex, typingSpeed, deletingSpeed, delayBetweenTexts]);

    return (
            <Container>
                <Details>
                    <div>
                        <Hello>Hello, I'm</Hello>
                        <Header>{header}</Header>
                        <Description>Self-Motivated | Dedicated Troubleshooter | Lifelong Learner </Description>
                    </div>
                    <Options>
                        <button className='resume'>Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                            </svg>
                        </button>
                        <SocialBtns>
                            <button className='social-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                    <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
                                </svg>
                            </button>
                            <button className='social-icon'>
                                <svg height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
                            </button>
                            <button className='social-icon'>
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" /></svg>
                            </button>
                        </SocialBtns>
                    </Options>
                </Details>
                <Profile>
                    <img src="images/avatar.jpg" alt="" />
                </Profile>
            </Container>
        )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-white);
    padding-top: 8rem;

    @media screen and (max-width: 768px){
        display: block;
        text-align: center;
        position: absolute;
        top: 300px;
    }
    
    @media screen and (max-width: 480px){
        top: 140px;
    }
`

const Profile = styled.div`
    img {
        width: 350px;
        height: 350px;
        margin-top: -5rem;
        border-radius: 50%;
        box-shadow: 0px 0px 15px var(--font-white);
    }

    img:hover {
        box-shadow: 0px 0px 20px var(--primary);
        background-color: #080c13;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        width: 100vw;
        background-color: red;
        img {
            width: 250px;
            height: 250px;
            position: absolute;
            top: -80px;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            width: 180px;
            height: 180px;
            top: 20px;
        }
    }
`

const Details = styled.div`
    width: 60vw;

    @media screen and (max-width: 768px) {
        width: 100vw;
        line-height: 2em;
    }

    @media screen and (max-width: 480px) {
        padding: 0 1.5rem;
    }
`

const Hello = styled.h2`
    color: var(--primary);
    font-size: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        margin-top: 2rem;
    }
`

const Header = styled.h1`
    font-size: 4rem;
    line-height: 1.5em;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 2em;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        line-height: 3em;
    }
`

const Description = styled.p`
    color: var(--light-gray);
    font-size: 1.15rem;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 5em;
    margin: 1em 0;
    margin-top: 5em;

    button.resume {
        padding: 0.5em;
        font-size: 1.25rem;
        color: var(--font-white);
        background-color: transparent;
        border-radius: 1.5em;
        border: none;
        box-shadow: 0px 0px 5px var(--primary);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    button.resume:hover {
        color: var(--primary);
        box-shadow: 0px 0px 10px var(--primary);
    }

    button.resume svg {
        width: 1.75rem;
    }
    
    @media screen and (max-width: 768px) {
        margin-top: 1em;
        justify-content: center;
        
        button.resume {
            font-size: 1rem;
        }
        
        button.resume svg {
            width: 1.5rem;
        }
    }

    @media screen and (max-width: 480px) {
        display: block;

        button.resume {
            margin: 0.5rem auto;
        }
    }
`

const SocialBtns = styled.div`
    button.social-icon {
        border: 0;
        outline: 0;
        background-color: transparent;
        cursor: pointer;
    }
    
    button.social-icon svg {
        height: 2.25rem;
        margin: 0.5em;
        fill: var(--font-white);
    }

    button.social-icon svg:hover {
        fill: var(--primary);
    }
    
    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: block;
        top: 390px;
        button.social-icon {
            margin: 1em;
        }
        button.social-icon svg {
            height: 1.75rem;
        }
    }
`

export default Home;