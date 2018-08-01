import React, { Component } from 'react';
import Counter from './Counter';

class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  value: 0 };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(event){
        event.preventDefault();
        var value = this.state.value;
        this.setState({value: value + 1});
    }

    onDecrement(event){
        event.preventDefault();
        var value = this.state.value;
        this.setState({value: value - 1});
    }

    render() {
        return (
            <Counter 
                value={this.state.value} 
                onIncrement={this.onIncrement} 
                onDecrement={this.onDecrement} />
        );
    }
}

export default CounterContainer;