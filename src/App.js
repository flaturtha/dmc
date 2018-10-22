import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: #242424;
    background-image: url('../pulpicons2.svg');

    a {
      color: #fffff0;
      margin-right: 2rem;
      padding: 1rem;
      display: inline-block;
      text-transform: uppercase;
    }
  }

  .content {
    padding: 1rem;
    background-image: url('../throne.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  img {
    max-width: 100%;
  }

  .logo {
    background-image: url('../atticus_fffff0.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center left;
    margin: 1rem 5rem -0.7rem 2rem;
  }

  .join {
    border: 1px solid #fffff0;
    border-radius: 3px;
    padding: 0.25rem;
  }

  button {
    margin: 3rem auto 1rem;
    background-color: #0054A6;
    color: #fffff0;
    padding: 2rem;
    font-size: 2rem;
    border-radius: 2rem;
  }

  h1 {
    font-size: 7rem;
  }

  h2 {
    font-size: 3rem;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <nav>
        <Link exact to="/" className="logo"></Link>
        <Link to="/what-is-it">What Is It?</Link>
        <Link to="/hows-it-work">How's It Work?</Link>
        <Link to="/whats-it-cost">What's It Cost?</Link>
        <Link to="/join-dmc" className="join">Join $1 Mystery Club</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
