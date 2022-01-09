
node {
    def app
    
    stage('Initialize'){
        def docker = tool 'myDocker'
        env.PATH = "${docker}/bin:${env.PATH}"
    }

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
}    

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("ettorefoti/simple-portfolio")
    }

    stage('Test image') {

        app.inside {
            sh 'echo "Tests passed"'
       }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', '7edd585b-7ee7-4a07-aa77-96d95e2c85e9') {
            app.push("latest")
        }
    }
}

