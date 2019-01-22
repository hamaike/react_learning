import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Card from './Card'
import TopMain from './TopMain'
import ButtonAppBar from './ButtonAppBar'
import UserRegister from './UserRegister'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import { reduxForm, Field } from 'redux-form';


const App = () => (
  <BrowserRouter>
    <div>
     <ul>
       <li><Link to='/'>Top</Link></li>
       <li><Link to='default'>Default</Link></li>
       <li><Link to='/seeking'>Seeking</Link></li>
       <li><Link to='/register'>Register</Link></li>
     </ul>
     <hr />
     
      <Route exact path='/' component={Top} />
      <Route path='/default' component={Default} />
      <Route path='/seeking' component={Seeking} />
      <Route path='/register' component={Register} />
    </div>
    
  </BrowserRouter>
)

const Top = () => (
  <div>
    <ButtonAppBar />
    <TopMain />
  </div>
)

const Default = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

const Register = () => (
  <div>
    <ButtonAppBar />
    <UserRegister />
  </div>
)

const Seeking = () => (
  <div>
    <Card />
  </div>
)

export default App