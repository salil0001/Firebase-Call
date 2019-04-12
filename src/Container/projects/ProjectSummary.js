

import React, { Component } from 'react'

export default class ProjectSummary extends Component {
  render() {
    const { Projects } = this.props
    const ProjectsList = Projects.map(project => {
        return (
            <div className="card z-depth-0 project-summary" key={project.id}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                    <p className="grey-text">3 September 2018</p>
                </div>
            </div>
        )
    })

    return (
        <div>
        {ProjectsList}
    </div>
    )
  }
}




