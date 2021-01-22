import '../style/App.css';
import {Clock} from './Clock';
import React from 'react';
import {Form} from "./Form";
import {country} from '../data'

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(window.localStorage.getItem('clocks')) || {country};
    }

    componentDidUpdate() {
        window.localStorage.setItem('clocks', JSON.stringify(this.state))
    }

    onAddClock = (clock) => {
        this.setState({country: [...this.state.country, clock]})
    }

    onDeleteClock = (index) => {
        this.setState({
            country: [...this.state.country.slice(0, index), ...this.state.country.slice(index + 1)]
        })
    }

    onChangeUtc = (index, newClock) => {
        this.setState({
            country: [...this.state.country.slice(0, index), newClock, ...this.state.country.slice(index + 1)]
        })
    }

    render() {
        return (
            <div className="App">
                <Form addClock={this.onAddClock}/>
                {this.state.country.map((item, index) => {
                    return (
                        <Clock
                            key={item.country + index}
                            utc={item.utc}
                            country={item.country}
                            index={index}
                            deleteClock={this.onDeleteClock}
                            changeUtc={this.onChangeUtc}
                        />
                    );
                })}

            </div>
        );
    }

}

export default App;
