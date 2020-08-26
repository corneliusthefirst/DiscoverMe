/* eslint-disable react-native/no-inline-styles */
import DiscoveryModal from './DiscoveryModal';
import ScreenMode from './screenMode';
import {observer} from 'mobx-react';

@observer
class TransparentModal extends DiscoveryModal {
  constructor(props) {
    super(props);
  }

  onClosedModal() {
    this.props.onClosed();
  }

  borderRadius = 25;
  modalBackground = ScreenMode.colors.transparent;
  modalHeight = this.props.modalHeight;
  modalWidth = this.props.modalWidth ? this.props.modalWidth : '80%';
  position = 'center';
  borderTopLeftRadius = 25;
  borderTopRightRadius = 25;
  backdropPressToClose = false;
  noshadow = true;

  modalBody() {
    return this.props.modalBody();
  }
}

export default TransparentModal;
