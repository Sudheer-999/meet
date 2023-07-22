import {Component} from 'react'

import {Link} from 'react-router-dom'
import RegisterContext from '../../Context/RegisterContext'
import {
  HomeContainer,
  Head,
  Main,
  Para,
  RegisterBtn,
  RegisteredCon,
  Rhead,
  Rpara,
  MeetImage,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {onRegister, isRegistered, inputName, inputTopic} = value

          const renderUnregisteredView = () => (
            <HomeContainer>
              <Head>Welcome to Meetup</Head>
              <Para>Please register for the topic</Para>
              <Link to="/register">
                <RegisterBtn onClick={onRegister}>Register</RegisterBtn>
              </Link>
              <MeetImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )

          const renderRegisteredView = () => (
            <RegisteredCon>
              <Rhead>Hello {inputName}</Rhead>
              <Rpara>Welcome to {inputTopic}</Rpara>
              <MeetImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </RegisteredCon>
          )

          return (
            <Main>
              {isRegistered ? renderRegisteredView() : renderUnregisteredView()}
            </Main>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Home
