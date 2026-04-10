pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Images') {
            steps {
                sh '''
                cd services/user-service && docker build -t user-service .
                cd ../restaurant-service && docker build -t restaurant-service .
                cd ../order-service && docker build -t order-service .
                '''
            }
        }
        
        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook ansible/deploy.yml'
            }
        }
    }
}
