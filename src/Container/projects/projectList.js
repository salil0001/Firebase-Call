import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';
import Store, { MyContext } from '../../ContextApi/Store';


export default class projectList extends Component {

state={
    name:"salil"
}
handleChange=()=>
{
    this.setState({
        name: "Hello"
    })
        console.log("Heybro");
}
    render() {
        return (
            <div className="project-list section">
            <button onClick={this.handleChange}>{this.state.name}</button>
                <Store>
                    <MyContext.Consumer>
                        {(context) => (
                            <React.Fragment>
                                <ProjectSummary Projects={context.state.Projects} />
                            </React.Fragment>
                        )}
                    </MyContext.Consumer>
                </Store>
            </div>
        )
    }
}
