IMAGE_NAME = flask-bingo
DOCKER_CMD = docker
SUDO_CMD = sudo

all: setup run

setup:
	$(SUDO_CMD) $(DOCKER_CMD) build -t $(IMAGE_NAME) .

run:
	$(SUDO_CMD) $(DOCKER_CMD) run -v "`pwd`"/bingo:/bingo:Z -p 127.0.0.1:5000:5000 -it $(IMAGE_NAME):latest ./run.sh


.PHONY: all setup run

