FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/luna_backend/bin:$PATH
ENV PYTHONDONTWRITEBYTECODE 1

RUN echo "source activate luna_backend" >~/.bashrc

# create scripts folder
RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*
RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
RUN mkdir -p /media-files
RUN mkdir -p /static-files

COPY ./backend /backend

WORKDIR /frontend_tmp

COPY ./frontend/package.json /frontend_tmp
RUN npm install
COPY ./frontend /frontend_tmp
RUN npm run build

WORKDIR /backend