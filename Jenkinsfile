pipeline{
    agent any
    environment{
        url="postgres://kazo:korede@159.65.62.220:5007"
    }
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