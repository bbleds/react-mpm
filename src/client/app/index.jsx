import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> test component</p>;
  }
}

render(<App/>, document.getElementById('app'));
