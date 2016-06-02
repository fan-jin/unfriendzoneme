import React from 'react';
import Form from './Form';

class Main extends React.Component {
    render() {
        return (
          <div className="col-md-8 col-md-offset-2 row">
            <h2 className="text-center">
              You got friendzoned? No Problem.
            </h2>
            <Form />
          </div>
        );
    }
}

export default Main;
