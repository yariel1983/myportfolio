import React from 'react';

const Context = React.createContext();

// This context contains two interesting components
export const { Provider, Consumer } = Context;

// This function takes a component...
export function withProduct(Component) {
  // ...and returns another component...
  return function ProductedComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
        <Consumer>
            {({actions}) => <Component {...props}  actions={actions} />}
        </Consumer>
    );
  };
}

