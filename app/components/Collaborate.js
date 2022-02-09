import React from 'react';

class Collaborate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Intl.DateTimeFormat('ro-RO', {
							hour: 'numeric',
							minute: 'numeric',
							timeZone: 'Europe/Bucharest'
						}).format()
        };
    }
    render() {
			return (
				<div className="flex flex-wrap items-center">
					<div className="w-full md:w-1/6 justify-center items-center hidden md:flex">
						<img className="h-16" src="/img/globe.gif"/>
					</div>
					<div className="w-full md:w-5/6">
						<p className="text-lg font-bold">Let's build something together!</p>
						<p className="mt-4 text-sm">I'm open to freelance jobs, collaboration with companies, startups and brands.</p>
						<p className="font-bold text-sm">Current time in Bucharest: { this.state.time }</p>
						<a className="cursor-point text-sm text-blue-600 mt-4" href="mailto:bogdan.mosteanu@hey.com" target="_blank">bogan.mosteanu@hey.com</a>
						
					</div>
				</div>
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
            time: Intl.DateTimeFormat('ro-RO', {
							hour: 'numeric',
							minute: 'numeric',
							timeZone: 'Europe/Bucharest'
						}).format()
        });
    }

}
export default Collaborate;

