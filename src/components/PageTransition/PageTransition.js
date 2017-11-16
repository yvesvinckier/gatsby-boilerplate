import React, { createElement, Component } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import Transitions, { timeout } from './Transitions'
import Swipe from './Swipe'

const historyExitingEventType = `history::exiting`

/* globals window CustomEvent */
export const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } })
  window.dispatchEvent(event)
  setTimeout(() => {
    callback(true)
  }, timeout)
}

export default class PageTransition extends Component {
  static propTypes = {
    loader: PropTypes.any,
    location: PropTypes.any,
    pageResources: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.transitions = new Transitions(this)
    this.state = { exiting: false, nextPageResources: {} }
    this.listenerHandler = this.listenerHandler.bind(this)
  }

  listenerHandler(event) {
    const nextPageResources = this.props.loader.getResourcesForPathname(
      event.detail.pathname,
      nextPageResources => this.setState({ nextPageResources })
    ) || {}
    this.setState({ exiting: true, nextPageResources })
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} })
    }
  }

  refNode = (c) => { this.node = c }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      onEntering: () => Transitions.onEntering(this.node),
      onEntered: () => Transitions.onEntered(this.node),
      onExiting: () => Transitions.onExiting(this.node),
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
    }
    return (
      <Transition {...transitionProps}>
        {
          (status) => {
            return (
              <div>
                <Swipe refAnim={this.refNode} />
                {
                  createElement(this.props.pageResources.component, {
                    ...this.props,
                    ...this.props.pageResources.json,
                  })
                }
              </div>
            )
          }
        }
      </Transition>
    )
  }
}