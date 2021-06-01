import React from 'react'

const Header = ({courses}) => {
    return (
        <h1>{courses}</h1>
    );
};

const Parts = ({parts}) => {
    return (
        <p>
            {parts.name} {parts.exercises}
        </p>
    );
};

const Content = ({part}) => {
    return (
        <div>
            <Parts parts={part[0]} />
            <Parts parts={part[1]} />
            <Parts parts={part[2]} />
        </div>
    );
};

const Total = ({part}) => {
    return (
        <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>
    );
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content part={course.parts} />
            <Total part={course.parts} />
        </div>
    );
};



export default App
