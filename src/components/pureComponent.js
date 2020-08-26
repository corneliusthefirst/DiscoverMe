import React, {Component} from 'react';

export default class DiscoveryPureComponent extends Component {
  componentDidMount() {
    this.mounted = true;
    this.componentMounting();
  }
  setStatePure(state, callback) {
    this.mounted && this.setState(state, callback);
  }
  componentMounting() {}
  openModalTimeout = null;
  componentWillUnmount() {
    this.unmountingComponent();
    this.mounted = false;
    this.openModalTimeout && clearTimeout(this.openModalTimeout);
    this.mountTimeout && clearTimeout(this.mountTimeout);
  }
  unmountingComponent() {}
}
