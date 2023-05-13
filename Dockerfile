FROM alpine

RUN apk update
RUN apk upgrade
RUN apk add --update --no-cache bash build-base gcc musl-dev python3-dev
RUN apk add --no-cache gcc g++ py-pip mysql-dev linux-headers libffi-dev openssl-dev

SHELL ["/bin/bash", "-c"]

# INSTALL REQUIRED PACKAGES
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN apk add --update --no-cache git

# Install node and npm
RUN apk add --update nodejs npm
RUN npm install -g npm && \
    npm update -g npm && \
    npm install -g yarn heroku


COPY . /mephisto
RUN mkdir ~/.mephisto

# Create the main Mephisto data directory
RUN mkdir -p /mephisto/data

SHELL ["/bin/bash", "-c"]
# Write the mephisto config file manually for now to avoid prompt.
# For bash-style string $ expansion for newlines,
# we need to switch the shell to bash:
RUN echo $'core: \n  main_data_directory: /mephisto/data' >> ~/.mephisto/config.yml

WORKDIR /mephisto
RUN pip3 install -e .

RUN yarn install
RUN yarn build-all

CMD bash -c "sleep infinity"