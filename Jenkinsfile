pipeline{
    agent:any
    stages{
        stage("init"){
            steps{
                gv = load "script.groovy"
            }
        }
        stage("test"){
            steps{}
        }
        stage("build"){
            steps{}
        }
        stage("deploy"){
            steps{}
        }
    }
    post{
        always{
            echo "CI done"
        }
        success{
            echo "successful"
        }
        failure{
            echo "failed"
        }
    }
}