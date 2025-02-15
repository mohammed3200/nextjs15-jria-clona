// components/DotLoader.tsx
import React from 'react';

const PageLoader = () => {
  return (
    <div
      className="container"
      style={{
        '--uib-size': '40px',
        '--uib-color': 'black',
        '--uib-speed': '1.5s',
        '--dot-size': 'calc(var(--uib-size) * 0.17)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 'var(--uib-size)',
        width: 'var(--uib-size)',
        animation: 'smoothRotate calc(var(--uib-speed) * 1.8) linear infinite',
      } as React.CSSProperties}
    >
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="dot"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            animation: `rotate var(--uib-speed) ease-in-out infinite`,
            animationDelay: `calc(var(--uib-speed) * -${0.835 - index * 0.167} * 0.5)`,
          }}
        >
          <div
            style={{
              content: '""',
              height: 'var(--dot-size)',
              width: 'var(--dot-size)',
              borderRadius: '50%',
              backgroundColor: 'var(--uib-color)',
              transition: 'background-color 0.3s ease',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PageLoader;