pipeline{
    agent:any
    stages{
        stage("init"){
            steps{
                gv = load "script.groovy"
            }
        }
        stage("test"){
            steps{
                gv.test()
            }
        }
        stage("build"){
            steps{
                gv.build()
            }
        }
        stage("deploy"){
            steps{
                gv.deploy()
            }
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