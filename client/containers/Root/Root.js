import React, { PureComponent } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from '../Layout/Layout';
import './root.scss';

const history = createBrowserHistory();

export default class Root extends PureComponent {

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount = () => {
    aos.init();
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render = () => {
    const { loading } = this.state;

    if (loading) {
      return <div class="loading">
        <div class="loading__circle">
          <div />
        </div>
        <div class="loading__text">
          <div>Británica de Ballet</div>
        </div>
      </div>;
    }

    return <Router history={ history } onLoad={ this.completedLoad }>
      <Route exact path="/" component={ Layout } />
    </Router>;
  }

}
