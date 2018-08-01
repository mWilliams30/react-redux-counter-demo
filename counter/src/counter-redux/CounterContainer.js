import React, { Component } from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement} from './actions/counterActions'
import CounterValueContainer from './CounterValue/CounterValueContainer';

class CounterContainerRedux extends Component {
    constructor(props) {
        super(props);        
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(event){
        event.preventDefault();
        this.props.actions.increment();
    }

    onDecrement(event){
        event.preventDefault();
        this.props.actions.decrement();        
    }

    render() {
        return (
            <div>
                <Counter 
                    value={this.props.value} 
                    onIncrement={this.onIncrement} 
                    onDecrement={this.onDecrement} />

                    <CounterValueContainer />
            </div>
        );
    }
}

function mapStateToProps(state){  
    return{
        value: state.counter
    } 
}

function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators({increment, decrement}, dispatch)                
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainerRedux);
    


        


