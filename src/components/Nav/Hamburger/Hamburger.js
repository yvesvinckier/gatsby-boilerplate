import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import styles from './styles.module.scss'

export default class Hamburger extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    opened: PropTypes.bool,
  }

  componentDidMount() {
    const timing = 0.3
    this.animation = new TimelineMax({ paused: true })
      .fromTo(this.top, timing, { y: 0 }, { y: 3, ease: Power2.easeOut })
      .fromTo(this.bottom, timing, { y: 0 }, { y: -3, ease: Power2.easeOut }, 0)
      // .fromTo(this.middle, timing, { opacity: 1 }, { opacity: 0, ease: Power2.easeOut }, 0)
      .fromTo(
        this.top,
        timing,
        { rotation: 0 },
        { rotation: 135, ease: Power2.easeOut },
        0
      )
      .fromTo(
        this.bottom,
        timing,
        { rotation: 0 },
        { rotation: 45, ease: Power2.easeOut },
        0
      )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.opened !== this.props.opened) {
      this.props.opened ? this.animation.play() : this.animation.reverse()
    }
  }

  refName(name) {
    return c => {
      this[name] = c
    }
  }

  render() {
    const { onClick } = this.props
    return (
      <button className='hamburger__container' onClick={onClick}>
        <span className="toggle__label">Menu</span>
        <div className='hamburger__burger'>
          <span ref={this.refName('top')} />
          {/* <span className='hamburger__bar' ref={this.refName('middle')} /> */}
          <span ref={this.refName('bottom')} />
        </div>
      </button>
    )
  }
}
