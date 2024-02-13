import React, { Component } from 'react'
import './Editor.css'

export default class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = (e) => {
            this.setState({ value: e.target.value });
        };
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="input">
                        <h3 className='input'>Input</h3>
                        <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value} />
                    </div>

                    <div className="output">
                        <h3 className='second'>Pro Note</h3>
                        <div className="output-text">{this.state.value}</div>
                    </div>

                </div>

            </div>
        )
    }
}
