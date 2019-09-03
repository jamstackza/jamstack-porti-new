import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class LayoutUiDesktop extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="home-layout-ui-desktop">

        <Iframe
          url="/assets/animations/particles/index.html"
          display="initial"
          position="relative"
          className="bgIframe"
        />
      </div>
    );
  }
}
