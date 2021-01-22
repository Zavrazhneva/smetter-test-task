import React from 'react';

const utcArr = ['-12', '-11', '-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0',
    '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12'];


export class Select extends React.Component {

    onSelectChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <select name="select" value={this.props.utc} onChange={this.onSelectChange}>
                {utcArr.map(item => {
                    return <option value={item} key={item} >{item}</option>
                })}

            </select>
        );
    }
}