import React from 'react';

const TechStack = () => {
  return (
     <div className="tech">
      <a name="tech" />
        <div className="rainbow">
          <span className="red" />
          <span className="orange" />
          <span className="yellow" />
          <span className="green" />
          <span className="star" />
        </div>
        <h1 className="tech-header">
          The More You Know
        </h1>

        <div className="tech-icos">
          <i className="devicon-javascript-plain colored dev-1" />
          <i className="devicon-react-original colored dev-2" />
          <i className="devicon-nodejs-plain-wordmark colored dev-3" />
          <i className="devicon-github-plain colored dev-4" />
          <i className="devicon-webpack-plain colored dev-5" />
          <i className="devicon-html5-plain colored dev-6" />
          <i className="devicon-sass-original colored dev-7" />
          <i className="devicon-mocha-plain colored dev-8" />
          <i className="devicon-postgresql-plain colored dev-9" />
          <i className="devicon-sequelize-plain colored dev-10" />
          <i className="devicon-babel-plain colored dev-11" />
          <i className="devicon-d3js-plain colored dev-12" />
          {/*<i className="devicon-docker-plain colored" />*/}
        </div>
      </div>
  );
};

export default TechStack;

      /*<h4 className="sub-header">
        Where my skillz at...
           <div className="underline" />
        </h4>*/