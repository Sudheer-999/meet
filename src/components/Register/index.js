import {Component} from 'react'
import RegisterContext from '../../Context/RegisterContext'

import {
  RegisterContainer,
  RegisterSection,
  FormSection,
  Fhead,
  Label,
  Error,
  NameInput,
  OptionsSection,
  RegisterNow,
  RegisterImage,
  TopicOption,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {showError: false}

  render() {
    const {showError} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {onNameInput, onTopic, inputName} = value

          const onName = event => {
            onNameInput(event.target.value)
          }

          const onTopicOption = event => {
            onTopic(event.target.value)
          }

          const onRegisterNow = () => {
            const {history} = this.props
            if (inputName.length > 0) {
              history.replace('/')
            }

            this.setState({showError: true})
          }

          const ErrorMsg =
            inputName.length < 1 ? <Error>Please enter your name</Error> : ''

          return (
            <RegisterContainer>
              <RegisterSection>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="register-image"
                />
                <FormSection>
                  <Fhead>Let us join</Fhead>
                  <Label htmlFor="name">NAME</Label>
                  <NameInput
                    type="text"
                    placeholder="Your name"
                    onChange={onName}
                    id="name"
                    value={inputName}
                  />
                  <Label htmlFor="option">TOPICs</Label>
                  <OptionsSection onChange={onTopicOption} id="option">
                    {topicsList.map(eachItem => (
                      <TopicOption value={eachItem.id} key={eachItem.id}>
                        {eachItem.displayText}
                      </TopicOption>
                    ))}
                  </OptionsSection>
                  <RegisterNow onClick={onRegisterNow}>
                    Register Now
                  </RegisterNow>
                  {showError && ErrorMsg}
                </FormSection>
              </RegisterSection>
            </RegisterContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
