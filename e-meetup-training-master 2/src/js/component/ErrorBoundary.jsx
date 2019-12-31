import React from 'react';
import {withSession} from '../stores/AppContext.jsx';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { hasError: false, berror: null, eInfo: null };
    
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ error: true, berror: error, eInfo: info});
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  render() {
    const { boundary } = this.props;
    
    if (this.state.hasError) {
      // You can render any custom fallback UI
     let tempErrorArray = boundary.catcherrorserver;
     tempErrorArray.error     = this.state.berror;
     tempErrorArray.errorInfo = this.state.eInfo;
     this.setState({ catcherrorserver: tempErrorArray });
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default withSession(ErrorBoundary);

ErrorBoundary.propTypes = {
    boundary: PropTypes.array,
    children: PropTypes.array
    };
    