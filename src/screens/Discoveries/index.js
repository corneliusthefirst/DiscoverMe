/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
} from 'react-native';
import { observer } from 'mobx-react';
import ActiveList from '../../components/screenComponents/ActiveList/ActiveList';
import shadower from '../../components/shadower';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';


@observer
class  Discoveries extends Component{
constructor(props){
    super(props);
    this.state = {
      mounted:true,
    };
}
/*willUnMount(){}
didMount(){}*/

render(){
    return (
     this.state.mounted ?  <View>
        {/*<Item style={{...shadower(0)}}/>*/}
         <ActiveList active={false} {...this.props} />
      </View> : <WaveIndicatorView />
    );
}
}

export default Discoveries;
