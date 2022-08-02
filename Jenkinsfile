pipeline{
    agent:any
    stages{
        stage("init"){
            steps{
                script{
                gv = load "script.groovy"
                }
            }
        }
        stage("test"){
            steps{
                script{
                gv.test()
                }

            }
        }
        stage("build"){
            steps{
                script{
                gv.build()
                }
            }
        }
        stage("deploy"){
            steps{
                script{
                gv.deploy()
                }
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