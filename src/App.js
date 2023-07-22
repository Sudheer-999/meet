import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import RegisterContext from './Context/RegisterContext'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Header from './components/Header'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {inputName: '', inputTopic: 'Arts and Culture', isRegistered: false}

  onNameInput = input => {
    this.setState({inputName: input})
  }

  onTopic = topic => {
    this.setState({inputTopic: topic})
  }

  onRegister = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {inputName, inputTopic, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          onNameInput: this.onNameInput,
          onTopic: this.onTopic,
          onRegister: this.onRegister,
          inputName,
          inputTopic,
          isRegistered,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
