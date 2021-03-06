FROM turistforeningen/ruby-iojs:2.1-1.4

ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8
ENV NG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8
ENV RUBYOPTS -E utf-8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
RUN bundle install

#COPY package.json /usr/src/app/
#RUN NODE_ENV=production npm --loglevel info --no-optional install

#COPY bower.json /usr/src/app/
#RUN ./node_modules/.bin/bower --allow-root install

RUN apt-get -y autoclean \
 && apt-get -y autoremove \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY . /usr/src/app/

