def test(){
    echo "testing"
    sh "npm ci --production"
    sh "npm test"
}
def build(){
    withCredentials([usernamePassword(credentialsId: '94290158-e809-48d4-a7df-0d83c7b67fbc', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        sh 'docker build -t cazmaars/jenkins:backendfinal-1.0 .'
        sh "echo $PASS | docker login -u $USER --password-stdin"
        sh 'docker push cazmaars/jenkins:drinks-1.0'
    }
}
def deploy(){
    echo "it's live"
}

return this