### Prisma

*   https://www.prisma.io/
*   npx prisma db pull (pega estrutura do banco de dados e aplica no schema.prisma)
*   npx prisma db push (cria estrutura dos models no banco de dados)
*   npx prisma migrate dev
*   npx prisma generate
*   npx prisma db seed
*   npx prisma studio
*   npx prisma migrate dev --name initialize

### Docker

*   https://hub.docker.com/\_/mongo
*   https://hub.docker.com/\_/mongo-express
*   https://hub.docker.com/r/mongoclient/mongoclient
*   https://hub.docker.com/\_/adminer
*   https://hub.docker.com/\_/mysql
*   https://hub.docker.com/\_/postgres
*   $ docker inspect container\_id | grep "IPAddress"
*   $ sudo docker-compose up -d
*   $ sudo docker network ls
*   $ sudo docker-compose ps
*   $ sudo docker-compose ps -a
*   $ sudo docker-compose restart
*   $ sudo docker-compose down
*   $ sudo docker rm -f CONTAINER\_ID
*   $ sudo docker rmi -f IMAGE\_ID
*   $ sudo docker-compose down
*   $ sudo docker-compose down -v
*   $ sudo docker-compose up -d --remove-orphans
*   $ sudo docker inspect CONTAINER\_NAME\_OR\_ID | grep '"IPAddress"' | head -n 1
*   $ docker inspect --format '{{ .NetworkSettings.IPAddress }}' container\_name\_or\_id

## Deploy Railway.app

*   https://nixpacks.com/docs/getting-started
