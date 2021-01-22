import './../style/form.css';
import React from 'react';
import { Select } from "./Select";

const utcArr = ['-12', '-11', '-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0',
    '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12'];

const defaultState = {
    country: '',
    utc: '0'
}

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState
    }

    onInputChange = (e) => {
        this.setState({country: e.target.value})
    }

    onSelectChange = (value) => {
        this.setState({utc: value})
    }
    onclickButton = () => {
        this.props.addClock(this.state);
        this.setState(defaultState)
    }

    render() {
        return (
            <div className="form">
                <h3 className="form__title">Добавить часы</h3>
                <label htmlFor="country">Город</label>
                <input type="text" id="country" value={this.state.country} onChange={this.onInputChange}/>
                <label htmlFor="utc">Часовой пояс</label>
                <Select onChange={this.onSelectChange} utc={this.state.utc} />
                <button className="button" disabled={!this.state.country.trim()} onClick={this.onclickButton}>Add country</button>
            </div>
        );
    }
}



