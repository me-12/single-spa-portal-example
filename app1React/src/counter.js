import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    globalIncrement = () => {
        this.props.globalEventDistributor.dispatch({ type: 'INCREMENT' });
    };

    globalDecrement = () => {
        this.props.globalEventDistributor.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                <br />
                <div>
                    <b> Count: {this.props.count}</b><br/><br/>
                    <button onClick={this.increment}>local increment</button>
                    &nbsp;Send a <b>local</b> increment event. This will only increase the counter for the current app. <br/>

                    <button onClick={this.decrement}>local decrement</button>
                    &nbsp;Send a <b>local</b> decrement event. This will only decrement the counter for the current app. <br/>


                    <button onClick={this.globalIncrement}>global increment</button>
                    &nbsp;Send a <b>global</b> increment event. This will increase the counter for the current app and all
                    other apps that listen to this event. <br/>

                    <button onClick={this.globalDecrement}>global decrement</button>
                    &nbsp;Send a <b>global</b> decrement event. This will increase the counter for the current app and all
                    other apps that listen to this event. <br/>
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