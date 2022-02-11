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
                    <p className="text-lg">Let's build something together!</p>
					<div className="w-1/3 md:w-2/6 justify-center items-center">
						<img className="h-16 w-auto mx-auto" src="/img/globe.gif"/>
					</div>
					<div className="w-2/3 md:w-4/6">
						<p className="my-2 text-sm text-justify">I'm open to freelance jobs, collaboration with companies, startups and brands.</p>
					</div>
                    <p className="text-sm">Current time in Bucharest: { this.state.time }</p>
                    <a className="cursor-point text-sm text-blue-600" href="mailto:bogdan.mosteanu@hey.com" target="_blank">bogan.mosteanu@hey.com</a>	
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

