up:
	docker-compose up

down:
	docker-compose down

up-build:
	docker-compose build
	docker-compose up -d

bash-backend:
	docker exec -it selenium_scraper bash

run-scraper:
	docker exec -it selenium_scraper bash -c "python main.py"