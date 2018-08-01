import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterValue from './CounterValue';

class CounterContainerValueRedux extends Component {   
    render() {
        return (
            <CounterValue value={this.props.value} />                
        );
    }
}

function mapStateToProps(state){  
    return{
        value: state.counter
    } 
}

export default connect(mapStateToProps, null)(CounterContainerValueRedux);
    


        


