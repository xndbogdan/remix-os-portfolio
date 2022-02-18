import React from 'react';

class Calendar extends React.Component {
    constructor(props) {
        let currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 30);
        super(props);
        this.state = {
            date: currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
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
        let currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 30);
        this.setState({
            date: currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        });
    }

}
export default Calendar;