FROM node:16-alpine3.16

# created a virtual path for server
RUN mkdir -p /home/server

# copying everything from the current directory into the vertual server path that was created
COPY . /home/server

# setting this as the current working directory
WORKDIR /home/server

# # create a docker user
# RUN groupadd -r kaz && useradd -g kaz

# # changing the owner of the shell script
# RUN chown -R tom:tom starter.sh

# changing the shell script to an executable file
# RUN chmod u+x -R starter.sh

# USER kaz

RUN npm i

CMD ["npm","start"] 




