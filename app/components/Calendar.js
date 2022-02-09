import React from 'react';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        };
    }
    render() {
        return (<span>{this.state.date}</span>);
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
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        });
    }

}
export default Calendar;