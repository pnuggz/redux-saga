import React, {PropTypes} from 'react';
import PanelMixed from './Panel';
import PanelMixed2 from './Panel2';
import PanelMixed3 from './Panel3';

class App extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <PanelMixed />
              <PanelMixed2 />
              <PanelMixed3 />
              <a href="https://github.com/andresmijares/async-redux-saga" target="_new">Check the repo here</a>
            </div>
          </div>
          {this.props.contest}
        </div>
      );
    }
}

App.propTypes = {
  contest: PropTypes.object.isRequired
};

export default App;
