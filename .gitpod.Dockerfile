FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 learnpack -g && learnpack:plugins install learnpack-node
