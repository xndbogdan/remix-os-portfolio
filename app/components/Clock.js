import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString("en-US")
        };
    }
    render() {
        return (
        <p className="App-clock">
            {this.state.time}
        </p>
        );
    }

    componentDidMount() {
        this.intervalID = setInterval(
        () => this.tick(),
        1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString("en-US")
        });
    }

}
export default Clock;