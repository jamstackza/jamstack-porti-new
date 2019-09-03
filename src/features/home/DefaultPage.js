import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import reactLogo from '../../images/react-logo.svg';
import jamstackLogo from '../../images/jamstack-logo.svg';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import * as actions from './redux/actions';
import LayoutUiDesktop from './LayoutUiDesktop';
import LayoutUiMobile from './LayoutUiMobile';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        <div>
          <BrowserView viewClassName="layoutUi-desktop">
            <LayoutUiDesktop />
          </BrowserView>
          <MobileView viewClassName="layoutUi-mobile">
            <LayoutUiMobile/>
          </MobileView>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
