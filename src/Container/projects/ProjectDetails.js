import React from 'react';

const ProjectDetails = (props) => {
    console.log(props);
    const id= props.match.params.id;
    const {Projects}=this.props

    const ProjectList=Projects.map(project =>{
        return(
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> {project.title} {id}</span>
                    <p>
                        {project.content}
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Salil Sharma</div>
                    <div>2 September 2018</div>
                </div>
            </div>
        </div>
        )}
    )


    return (
       {ProjectList}
    );
};

export default ProjectDetails;