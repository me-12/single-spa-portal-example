import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                <h4>Counter:</h4>
                <div>
                    <button onClick={this.increment}>+</button>
                    <span style={{fontWeight: 800, marginLeft: 5, marginRight: 5}}>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);