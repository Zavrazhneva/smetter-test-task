import './../style/clock.css';
import React from 'react';
import {Select} from "./Select";

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            ...this.getTransforms(date),
            utc: props.utc,
            isChangeUtc: false,
        };
    }

    getTransforms(day) {
        const deg = 6;

        let hh = (day.getUTCHours() + +this.props.utc) * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        return {
            hh: `rotateZ(${(hh) + (mm/12)}deg)`,
            mm: `rotateZ(${mm}deg)`,
            ss: `rotateZ(${ss}deg)`,
        }
    }

    componentDidMount() {
        setInterval(()=> {
            const date = new Date();
            this.setState(this.getTransforms(date))
        },0)
    }

    onDeleteClick = () => {
        this.props.deleteClock(this.props.index);
    }

    changeUtcClick = () => {
        this.setState({
            isChangeUtc: true
        })
    }

    onClickChangeUtc = () => {
        this.props.changeUtc(this.props.index, {
            country: this.props.country,
            utc: this.state.utc,
        });
        this.setState({
            isChangeUtc: false
        })    }
    onSelectChange = (value) => {
        this.setState({utc: value});
    }


    render() {
        const {country, utc} = this.props;
        const {hh, mm, ss} = this.state;
        return (
            <div className="country__wrapper">
                <span className="delete" onClick={this.onDeleteClick}/>
                <h2 className="country">{country}</h2>
                {this.state.isChangeUtc && (
                    <div>
                        <Select utc={this.state.utc} onChange={this.onSelectChange} />
                        <button className="button" onClick={this.onClickChangeUtc}>change</button>
                    </div>

                )}
                {!this.state.isChangeUtc && (
                    <div className="utc" onDoubleClick={this.changeUtcClick}>utc: {utc}</div>
                )}

                <div className="clock">
                    <div className="hour">
                        <div className="hr"  style={{transform: hh}}/>
                    </div>
                    <div className="min">
                        <div className="mn"  style={{transform: mm}}/>
                    </div>
                    <div className="sec">
                        <div className="sc" style={{transform: ss}}/>
                    </div>
                </div>
            </div>

        );
    }
}



