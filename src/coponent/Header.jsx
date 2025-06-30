import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Header() {
  const fullName = 'Oussama Belattar';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    let timeout;
    if (!isDeleting && index <= fullName.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }
    if (index === fullName.length + 1 && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    }
    if (index === -1 && isDeleting) {
      setIsDeleting(false);
      setIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const blobAnimation = {
    position: 'absolute',
    top: '50%',
    left: '-300px',
    width: '300px',
    height: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'slideX 12s linear infinite',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 0,
  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes slideX {
        0% { transform: translateX(0) translateY(-50%); }
        50% { transform: translateX(110vw) translateY(-50%); }
        100% { transform: translateX(0) translateY(-50%); }
      }
    `;
    if (![...styleSheet.cssRules].some(rule => rule.name === 'slideX')) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  const socialLinks = [
    { Icon: FaGithub, url: 'https://github.com/oussbelat' },
    { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/oussama-belattar/' },
    { Icon: FaInstagram, url: 'https://instagram.com/yourprofile' },
  ];

  return (
    <header
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-24 h-auto min-h-screen flex items-center bg-black text-white filter grayscale"
      style={{ color: '#eee' }}
    >
      <div style={blobAnimation} />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-12 relative z-10 pb-16">
        <div className="mb-8 md:mb-0">
          <img
            src="/your-profile.jpg"
            alt=""
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg filter grayscale"
            style={{ borderColor: 'rgba(255,255,255,0.6)' }}
          />
        </div>

        <div className="text-center md:text-left max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight md:whitespace-nowrap whitespace-normal break-words"
            style={{ color: '#ddd' }}
          >
            Hi, I'm{' '}
            <span
              className="border-r-2 animate-pulse"
              style={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.7)',
                filter: 'grayscale(0)',
              }}
            >
              {displayText}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4" style={{ color: '#bbb' }}>
            Front-End Developer
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-8 px-2 sm:px-0" style={{ color: '#aaa' }}>
            Dedicated to crafting clean, maintainable code and intuitive, visually stunning user
            experiences. I build fast, responsive websites using React and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <Link
              to="/Contact"
              className="px-6 py-3 rounded-lg font-semibold transition text-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#eee',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#eee';
              }}
            >
              Hire Me
            </Link>
            <Link
              to="/Projects"
              className="px-6 py-3 rounded-lg font-semibold transition text-center"
              style={{
                borderColor: 'rgba(255,255,255,0.3)',
                border: '1px solid',
                color: '#eee',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#eee';
              }}
            >
              View Projects
            </Link>
          </div>

          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
