import './style.css';

export interface IBallConfig {
  color: string;
  gravity: number;
}

export function BounceBall(config: IBallConfig) {

  const viewport = window.innerHeight - 50;
  const height = Math.round(
    viewport * 0.9
  );
  const gravity = Math.round((1/config.gravity) * 400);


  // Originaly from https://github.com/sparkbox/bouncy-ball
  const css = `
ball {
  background-color: ${config.color};

  /* animation properties */
  animation-name: bounce;
  animation-duration: ${gravity}ms;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.6,0.08,0.8,.6);
  animation-iteration-count: infinite;
}

@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
    box-shadow: 0 ${height + 50}px 100px  rgba(0, 0, 0, 0.05),
      inset 0 -15px 15px -5px rgba(0,0,0,0.2);
  }
  to   {
    transform: translate3d(0, ${height+10}px, 0);
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.1),
      inset 0 -15px 15px -5px rgba(0,0,0,0.3);
  }
}

/* Vendor prefixes -- adds support for the browsers that need it */
/* See http://caniuse.com/#feat=css-animation for support matrix */
ball {
  -webkit-animation-name: bounce;
  -webkit-animation-duration: ${gravity}ms;
  -webkit-animation-direction: alternate;
  -webkit-animation-timing-function: cubic-bezier(.6,0.08,0.8,.6);
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes bounce {
  from {
    -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0);
    box-shadow: 0 ${height + 50}px 100px  rgba(0, 0, 0, 0.05),
      inset 0 -15px 15px -5px rgba(0,0,0,0.2);
    }
  to   {
    -webkit-transform: translate3d(0, ${height+10}px, 0); transform: translate3d(0, ${height+10}px, 0);
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.1),
      inset 0 -15px 15px -5px rgba(0,0,0,0.3);
  }
}
`;


    const head = document.head || document.getElementsByTagName('head')[0];
    
    const oldStyle = document.getElementById('ball-styles');
    if (oldStyle) {
      oldStyle.parentNode.removeChild(oldStyle);
    }

    const style = document.createElement('style');

    style.id = 'ball-styles';
    style.type = 'text/css';
    if (style['styleSheet']){
      style['styleSheet'].cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}