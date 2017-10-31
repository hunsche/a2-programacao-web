FROM ubuntu:16.04
RUN apt-get update \
    && apt-get install -y \
        wget \
        xz-utils \
        git
RUN wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-x64.tar.xz \
    && tar -Jxf node-v8.9.0-linux-x64.tar.xz \
    && mv /node-v8.9.0-linux-x64/bin/node /usr/bin/ \
    && ./npm install npm@latest -g
RUN git clone https://github.com/hunsche/a2-programacao-web \
    cd 