pipeline {
  agent any
  stages {
    stage('Build Backend') {
      steps {
        configFileProvider([configFile(fileId: 'env', variable: 'envFile')]) {
          sh 'cp $envFile ./.env'
        }
        sh """
          set -a
          . ./.env > /dev/null 2>&1
          cp package.json ./server
          cp yarn.lock ./server
          docker build -t \$SERVER_APP_NAME ./server
          set +a
        """
      }
    }

    stage('Serve Backend') {
      steps {
        sh """
          set -a
          . ./.env > /dev/null 2>&1
          docker stop \$SERVER_APP_NAME || true
          docker container rm \$SERVER_APP_NAME || true
          docker run -dp \$SERVER_PORT:80 --env-file ./.env -e SERVER_PORT=80 --name \$SERVER_APP_NAME \$SERVER_APP_NAME
          set +a
        """
      }
    }

    stage('Build Frontend') {
      steps {
        sh """
          set -a
          . ./.env > /dev/null 2>&1
          docker build -t \$APP_NAME .
          set +a
        """
      }
    }

    stage('Serve Frontend') {
      steps {
        sh """
          set -a
          . ./.env > /dev/null 2>&1
          docker stop \$APP_NAME || true
          docker container rm \$APP_NAME || true
          docker run -dp \$PORT:80 --name \$APP_NAME \$APP_NAME
          set +a
        """
      }
    }
  }
}
