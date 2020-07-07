import { withRouter } from 'react-router';
import React, { Component } from 'react';
import propTypes from 'prop-types';

import Page from '../Page';
import { Error500 } from '../Page/Error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };

    const { history } = this.props;

    history.listen(() => {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
        });
      }
    });
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount() {
    const { history } = this.props;
    this.unlisten = history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }
  
  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    const {
      children
    } = this.props;

    if (this.state.hasError) {
      return (
        <Page>
          <Error500 />
        </Page>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  history: propTypes.object.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

export { ErrorBoundary };
export default withRouter(ErrorBoundary);
