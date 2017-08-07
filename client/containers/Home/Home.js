import React, { PureComponent } from 'react';
import $ from 'jquery';
import Scroll from 'react-scroll';
import { TweenLite, Power2, Power1 } from 'gsap';
import './home.scss';
import fondoInicio from '../../../static/images/fondo-inicio.jpg';
import caret from '../../../static/images/caret.png';

const scroll = Scroll.animateScroll;

export default class Home extends PureComponent {

  componentDidMount = () => {
    $(window).on('scroll', () => {
      const dy = $(window).scrollTop();
      const home = $(this.home);
      TweenLite.to(home, 0.1, { opacity: 1 - (dy / 600), ease: Power2.easeOut });
    });
  }

  imageLoaded = () => {
    const image = this.image;
    TweenLite.to(image, 2, { opacity: 1, ease: Power1.easeInOut });
  }

  goAboutSection = () => {
    const heightVP = $(window).height();
    scroll.scrollTo(heightVP);
  }

  render = () =>
    <section id="id-home" class="home" ref={ node => (this.home = node) }>
      <div class="home__mainImage">
        <img class="home__mainImage__image" src={ fondoInicio }
                                            alt="Academia Británica de Ballet"
                                            onLoad={ this.imageLoaded }
                                            ref={ node => (this.image = node) } />
      </div>
      <div class="home__caret">
        <img class="home__caret__image" src={ caret } alt="Scroll Down" onClick={ this.goAboutSection } />
      </div>
    </section>;
}
