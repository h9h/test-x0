import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Toolbar,
  NavLink,
} from 'rebass'

export default class extends React.Component {
  render () {
    const {children} = this.props
    return (
      <React.Fragment>
        <Toolbar>
          <NavLink is={Link} to='/'>
            Home
          </NavLink>
        </Toolbar>
        <Container>
          {children}
        </Container>
      </React.Fragment>
    )
  }
}
