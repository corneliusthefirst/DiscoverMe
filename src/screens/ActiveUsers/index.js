/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ActiveList from '../../components/screenComponents/ActiveList/index';
//import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';

@observer
class  ActiveUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            mounted:true,
        };
    }
    willUnMount(){}
    didMount(){}

render(){

    return (
       this.state.mounted ? <ActiveList discoverlist {...this.props} /> : <WaveIndicatorView size={100}/>
    );
}

}

export default ActiveUsers;
