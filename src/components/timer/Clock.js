import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Timer from 'react-compound-timer';
class Clock extends Component {
    constructor() {
        super()
        this.state = {
            toRedirect: false
        }
        this.trigger = this.trigger.bind(this);
    }
    trigger() {
        this.setState({ toRedirect: true });
        console.log("True");
    }
    render() {
        if (this.state.toRedirect)
            return <Redirect to={this.props.redirectTo} />
        return (
            <div>
                <Timer
                    initialTime={this.props.min * 60000}
                    direction="backward"
                    checkpoints={[
                        {
                            time: 10,
                            callback: () => console.log("Message"),
                        },
                        {
                            time: 0,
                            callback: this.trigger,
                        }
                    ]}
                >
                    {() => (
                        <React.Fragment>
                            <div>
                                <Timer.Hours />:
                                <Timer.Minutes />:
                                <Timer.Seconds />
                            </div>
                        </React.Fragment>
                    )}
                </Timer >
            </div>
        )
    }
}
export default Clock;