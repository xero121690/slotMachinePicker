import React, { Component } from 'react';
import logo from './logo.svg';
import mario from './mario.JPG'
import rene from './rene.JPG'
import ethan from './ethan.JPG'
import misa from './mesa2.JPG'
import kyle from './kyle.JPG'
import pete from './pete.JPG'
import hook from './thisIsTheHook.mp3'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showImages: false
    }
    this.doAction = this.doAction.bind(this)
    this.refreshPage = this.refreshPage.bind(this)
    this.sound = new Audio(hook)
  }

  shuffle (a) {
    var j, x, i
    for (i = 0; i < a.length; i++) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }

  returnCssAnimation (i, namesRandom, ulID, borderID) {
    if (i === 5) {
      setTimeout(() => {
        var cssAnimation = namesRandom
        ulID.className = cssAnimation
        setInterval(() => this.changeBorderRed(borderID), 180)
      }, i * 5000)
    } else {
      setTimeout(() => {
        var cssAnimation = namesRandom
        ulID.className = cssAnimation
        setInterval(() => this.changeBorder(borderID), 180)
      }, i * 5000)
    }
  }

  doAction () {
    this.sound.play()
    var names = ['ethanAnimation', ' marioAnimation', 'reneAnimation', 'misaAnimation', 'kyleAnimation', 'peterAnimation'];
    var elementsID = ['pics0', 'pics1', 'pics2', 'pics3', 'pics4', 'pics5']
    var bordersID = ['border0', 'border1', 'border2', 'border3', 'border4', 'border5']
    var copyNames = JSON.parse(JSON.stringify(names))

    // copyNames only used to keep track of the length while names is the original that gets modified
    for (var i = 0; i < copyNames.length; i++) {
      var randomNum = Math.floor(Math.random() * ((names.length - 1) + 1))
      var ulID = document.getElementById(elementsID[randomNum])
      var borderID = document.getElementById(bordersID[randomNum])
      this.shuffle(names)
      this.returnCssAnimation(i, names[randomNum], ulID, borderID)

      elementsID.splice(randomNum, 1)
      bordersID.splice(randomNum, 1)
      names.splice(randomNum, 1)
    }
  }
  changeBorder (borderID) {
    if (borderID.className === 'marquee') {
      borderID.className = 'marquee2'
      return
    }
    if (borderID.className === 'marquee2') {
      borderID.className = 'marquee'
    }
  }

  changeBorderRed (borderID) {
    if (borderID.className === 'marqueeRed' || borderID.className === 'marquee') {
      borderID.className = 'marquee2Red'
      return
    }
    if (borderID.className === 'marquee2Red') {
      borderID.className = 'marqueeRed'
    }
  }

  refreshPage () {
    window.location.reload(true)
  }

  render () {
    var imgStyle = {
      // display block is the strip of the images
      display: 'block',
    }

    var rouletteStyle = {
      position: 'relative',
      top: '-16px',
    }

    // var names = [ethan, mario, rene, misa, kyle, pete];
    // this is a test to see if keyframes work, this test will be under ethanAnimation animation keyframe
    var styleSheetElement = document.createElement('style')
    var customStyleSheet;
    document.head.appendChild(styleSheetElement)

    customStyleSheet = document.styleSheets[0];
    var percentTest = -85.4 + '%';
    customStyleSheet.insertRule('@keyframes test {0% { transform: translate(0, 0);} 100% { transform: translate(0, ' + percentTest + ')}}')

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Trash Talk!</h1>
        </header>

        <div id="main">
          <table>
            <tbody>
              <tr className="row">
                <td className="marquee" id="border0" style={rouletteStyle}>
                  <ul style={imgStyle} id="pics0" className="ul">
                    <img src={mario} className={'images'} height="175" width="135" alt="mario" style={imgStyle} />
                    <img src={rene} className={'images'} height="175" width="135" alt="rene" style={imgStyle} />
                    <img src={ethan} className={'images'} height="175" width="135" alt="ethan" style={imgStyle} />
                    <img src={misa} className={'images'} height="175" width="135" alt="misa" style={imgStyle} />
                    <img src={kyle} className={'images'} height="175" width="135" alt="kyle" style={imgStyle} />
                    <img src={pete} className={'images'} height="175" width="135" alt="pete" style={imgStyle} />
                  </ul>
                </td>
                <td className="marquee" id="border1" style={rouletteStyle}>
                  <ul style={imgStyle} id="pics1" className="ul">
                    <img src={mario} className={'images'} height="175" width="135" alt="mario" style={imgStyle} />
                    <img src={rene} className={'images'} height="175" width="135" alt="rene" style={imgStyle} />
                    <img src={ethan} className={'images'} height="175" width="135" alt="ethan" style={imgStyle} />
                    <img src={misa} className={'images'} height="175" width="135" alt="misa" style={imgStyle} />
                    <img src={kyle} className={'images'} height="175" width="135" alt="kyle" style={imgStyle} />
                    <img src={pete} className={'images'} height="175" width="135" alt="pete" style={imgStyle} />
                  </ul>
                </td>
                <td className="marquee" id="border2" style={rouletteStyle}>
                  <ul style={imgStyle} id="pics2" className="ul">
                    <img src={mario} className={'images'} height="175" width="135" alt="mario" style={imgStyle} />
                    <img src={rene} className={'images'} height="175" width="135" alt="rene" style={imgStyle} />
                    <img src={ethan} className={'images'} height="175" width="135" alt="ethan" style={imgStyle} />
                    <img src={misa} className={'images'} height="175" width="135" alt="misa" style={imgStyle} />
                    <img src={kyle} className={'images'} height="175" width="135" alt="kyle" style={imgStyle} />
                    <img src={pete} className={'images'} height="175" width="135" alt="pete" style={imgStyle} />
                  </ul>
                </td>
                <td className="marquee" id="border3" style={rouletteStyle}>
                  <ul style={imgStyle} id="pics3" className="ul">
                    <img src={mario} className={'images'} height="175" width="135" alt="mario" style={imgStyle} />
                    <img src={rene} className={'images'} height="175" width="135" alt="rene" style={imgStyle} />
                    <img src={ethan} className={'images'} height="175" width="135" alt="ethan" style={imgStyle} />
                    <img src={misa} className={'images'} height="175" width="135" alt="misa" style={imgStyle} />
                    <img src={kyle} className={'images'} height="175" width="135" alt="kyle" style={imgStyle} />
                    <img src={pete} className={'images'} height="175" width="135" alt="pete" style={imgStyle} />
                  </ul>
                </td>
                <td className="marquee" id="border4" style={rouletteStyle}>
                  <ul style={imgStyle} id="pics4" className="ul">
                    <img src={mario} className={'images'} height="175" width="135" alt="mario" style={imgStyle} />
                    <img src={rene} className={'images'} height="175" width="135" alt="rene" style={imgStyle} />
                    <img src={ethan} className={'images'} height="175" width="135" alt="ethan" style={imgStyle} />
                    <img src={misa} className={'images'} height="175" width="135" alt="misa" style={imgStyle} />
                    <img src={kyle} className={'images'} height="175" width="135" alt="kyle" style={imgStyle} />
                    <img src={pete} className={'images'} height="175" width="135" alt="pete" style={imgStyle} />
                  </ul>
                </td>
                <td className="marquee" id="border5" style={rouletteStyle}>
                  <ul style={imgStyle} id="pics5" className="ul">
                    <img src={mario} className={'images'} height="175" width="135" alt="mario" style={imgStyle} />
                    <img src={rene} className={'images'} height="175" width="135" alt="rene" style={imgStyle} />
                    <img src={ethan} className={'images'} height="175" width="135" alt="ethan" style={imgStyle} />
                    <img src={misa} className={'images'} height="175" width="135" alt="misa" style={imgStyle} />
                    <img src={kyle} className={'images'} height="175" width="135" alt="kyle" style={imgStyle} />
                    <img src={pete} className={'images'} height="175" width="135" alt="pete" style={imgStyle} />
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <audio controls autoplay>
          <source src={hook} type="audio/mpeg"> </source>
        </audio> */}
        <div className="wrapper">
          <button className="button" type="button" onClick={this.doAction}>START</button>
          <button className="button" type="button" onClick={this.refreshPage}>Try Again</button>
        </div>
      </div>
    );
  }
}

export default App;
