import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { Counter } from './components/Counter';
import { FizzBuzz } from './components/FizzBuzz';
import { Input } from './components/Input';
import { Message } from './components/Message';
import { Name } from './components/Name';


function App() {
  return (
    <div className="App">
      <Name />
      <Container title='message'>
        <Message />
      </Container>
      <Container title='counter'>
        <Counter initialValue={0}/>
      </Container>
      <Container title='fizz buzz'>
        <FizzBuzz />
      </Container>
      <Container title='custom'>
        <Input />
      </Container>
    </div>
  );
}

export default App;
