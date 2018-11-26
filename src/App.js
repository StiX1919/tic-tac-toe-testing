import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './components/Board/Board'

class App extends Component {

  // prep for tests tomorrow
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Board />
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABwCAYAAAAg5f1KAAAFoElEQVR4Xu3dQXLdNhCEYWqRXS6VQ6VyBpcP5Utl54VTkuxk/aZR1Zzw07414BCNfwYg+d6u6/px+ZMBGViZgbd3A//4MfPw29u7/OMfjC6e/jN/f/z52yh/375+P5L/dnzzZ+4fBr7BAtQ2UDs+AzPwiGB3qQDaBmrHZ2AGZuBBBn4tYAw8N1C7hVRCK6HrPTgCzxcQBmZgBl68CcvADMzADDwvAdo9xB3it3vQdnwl9Nw/CIzACIzA8xXkDgRsE6BNwHb8dv43x0dgBEZgBEbgwTHsdZdzWATeO38RGIERGIH3rmB36MHbBGzH39yDtufPB4En5R+NDMhAPwMM3L8HRiAD4wzcogdOS7hUn5ZwafxUv3387etP89fUM/CBTax0Aqb6dAKl8dv69Po36xmYgeNdaAaebSOdeB+dgRmYgR0jZSvQ9hXc+LNveqX521wCp8dQCIzACIzACDw5B/j1Vck2gdL4bT0Cl1eg7RPA+JXQkwXcJtbP7yKnBkpX8DR+qt8+/vb1p/lr6vXAemA9cLkCTRYABmZgBmZgm1iTHsgm1udPwyih5/5BYASODZQaMNUnJWh6DtvWMzADM/D2EnpS/tHIgAz0M+B94P49MAIZGGfgFiV02sO0e6h2/DR/9PNNJD3wDXrQdAIz8F4DtA2Yxkfg/8ECki5A9HsXIAZm4IuBGXjUhJ94mPsODwIoofcaIC1h23oERmAE3n4OvL2EahOwHX/7/TP+eQWDwAiMwAg8X0FO9BBtArbjI1h3/jXzj8AIjMAI3F0B2wRsx28S4EQFZfxz/yAwAiMwAs9XkBMreJuA7fgI1p1/zfwjMAIj8HYCjx6jIpIBGahnwPvA9VtgADIwz4AS+kAJ3eyBTjwLroff20MzMAPH38RqL2BPjs/ADMzA2zextq9gTy8B0+tP9dvnz+bxIzACIzACdzcBnk6Q9PpT/WaCnXiQqHn9CIzACIzACDw5ybvLJ4UQuDt/E4IjMAIjMAJ3V7CnEyS9/lSfEGR7D9oePwIjMAIjMALrgV/PwKk9gCdXAAiMwAiMwAj8On+u6xSB0h421T+ZgLfogSeTj0YGZKCfAe8D9++BEcjAOANHeuDrr99nA/jy96cu1LdLuHYJmsZP9e38Pzk+Ax/YxGobII2f6p9soFv0wOkNSAma6tPxp/q2AdL4qT7NH/18ExiBEdgx0tOPkVKCpvr2Ct4mWBo/1bfz/+T4CIzACIzAdqEn2/Dfvn7/kKUESQma6tPx0+uBJ/65zZNQ6QRODZjq0/HTMzADDzLwqwJg4LmBTlRQyQKmB75BCZvcQB92z1uQNP9NPQMzsE0sm1g2sQYV7GUT650fzyZoev0IfGACtXvINH6qb5aQqQG26xmYgZXQ20voSflHIwMy0M+A94H798AIZGCcgU8Dh+/jpvp2D5X2gKm+ff3iLz8HTg2Y6tsTKDVgqm9fv/gMPCsBfn6Roz2BUgOm+vb1i8/ADDzIwKlzYAbca8D0GEsPfF3xMQoCP9dAqQFTPQMzcPw6owqgt4AxMAMz8PoHORwjDTrY699nmZXQPQKlJeh2PQIjMAIjcPY2UruHSgma6tvXL/7eCgKBERiBERiBJ020c2DvA6c9OAIjMAIjMAIj8OsZOPX7yE/u4b1O+Pq8o5CB22SAgW9zKwxEBl7PwJFP6jy5hHlPefsYKY2/Xf/k+cfAvokVL0DtBYCBF+/CpdvwJ/TpBE4nYBp/uz7N32Y9AiMwAi8GGAMzMAMz8N5nSZXQ+SZcuwTfXAKn8w+BERiBERiBXz/B++994pQgbQK246f526xHYARGYARGYAR+PQN+YDx/GwuBERiBERiBX+ePHhiBEfjDN+1NiHQTJx1/Gn+7Ps3fZr0S+sACkBognUBp/O36NH+b9V4nnNS+NDJwkwz8AyoJcwBMtAksAAAAAElFTkSuQmCC'/>
        </header>
      </div>
    );
  }
}

export default App;
