import TypescriptLogo from 'src/assets/logos/typescript.svg?react';
import typescript from 'src/assets/logos/typescript.svg';
import javascript from 'src/assets/logos/javascript.svg';
import nodejsLight from 'src/assets/logos/nodejsLight.svg';
import docker from 'src/assets/logos/docker.svg';
import reactLogo from 'src/assets/logos/react.svg';
import postgresql from 'src/assets/logos/postgresql.svg';
import expressjs from 'src/assets/logos/expressjs.svg';
import nginx from 'src/assets/logos/nginx.svg';
import python from 'src/assets/logos/python.svg';
import FastAPI from 'src/assets/logos/fastapi.svg';
import viteLogo from 'src/assets/logos/vite.svg';
import React from 'react';

const Skills = () => {
  return (
    <div className="px-52 flex flex-col h-screen w-full bg-zinc-950 justify-center items-center">
      <h1 className="text-6xl">My Skills</h1>

      <TypescriptLogo />
      <div className="overflow-hidden">
        <div className="flex infinite-scroll space-x-20">
          <img className="h-20 rounded-lg" src={typescript} alt="typescript" />
          <img className="h-20 rounded-lg" src={javascript} alt="typescript" />
          <img className="h-20 rounded-lg" src={nodejsLight} alt="nodejs" />
          <img className="h-20 rounded-lg" src={docker} alt="docker" />
          <img
            className="h-20 rounded-lg infinite-spin"
            src={reactLogo}
            alt="reactLogo"
          />
          <img className="h-20 rounded-lg" src={postgresql} alt="postgresql" />
          <img className="h-20 rounded-lg" src={nginx} alt="nginx" />
          <img className="h-20 rounded-lg" src={FastAPI} alt="FastAPI" />
          <img
            className="h-20 rounded-lg bg-white"
            src={expressjs}
            alt="expressjs"
          />
          <img className="h-20 rounded-lg" src={python} alt="python" />
          <img className="h-20 rounded-lg" src={viteLogo} alt="Vite.JS" />

          <img className="h-20 rounded-lg" src={javascript} alt="typescript" />
          <img className="h-20 rounded-lg" src={nodejsLight} alt="nodejs" />
          <img className="h-20 rounded-lg" src={docker} alt="docker" />
          <img className="h-20 rounded-lg" src={reactLogo} alt="reactLogo" />
          <img className="h-20 rounded-lg" src={postgresql} alt="postgresql" />
          <img className="h-20 rounded-lg" src={nginx} alt="nginx" />
          <img className="h-20 rounded-lg" src={FastAPI} alt="FastAPI" />
          <img className="h-20 rounded-lg" src={expressjs} alt="expressjs" />
          <img className="h-20 rounded-lg" src={python} alt="python" />
          <img className="h-20 rounded-lg" src={viteLogo} alt="Vite.JS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
