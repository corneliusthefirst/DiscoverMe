import {Component} from 'react';

class Unmounter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._focus = this.props.navigation.addListener('focus', (e) => {
      this.didMount();
      this.setState({mounted: true, canBlur: true});
    });

    this._blur = this.props.navigation.addListener('blur', (e) => {
      this.willUnMount();
      this.setState({mounted: this.state.canBlur ? false : true});
    });
  }

  componentWillUnmount() {
    this._blur();
    this._focus();
  }
  donotBlur = () => {
    this.setState({canBlur: false});
  };
}

export default Unmounter;
