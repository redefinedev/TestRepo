import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildFeatures.perfmon
import jetbrains.buildServer.configs.kotlin.buildSteps.DockerCommandStep
import jetbrains.buildServer.configs.kotlin.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.triggers.vcs

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2022.10"

project {

    buildType(DockerTest)
}

object DockerTest : BuildType({
    name = "Docker test"

    vcs {
        root(DslContext.settingsRoot)
    }

    steps {
        dockerCommand {
            name = "Run docker test"
            commandType = build {
                source = file {
                    path = "./Dockerfile"
                }
                platform = DockerCommandStep.ImagePlatform.Linux
                namesAndTags = "pytest_for_teamcity"
                commandArgs = "--build-arg TEAMCITY_PROJECT_NAME='%system.teamcity.projectName%' --build-arg TEAMCITY_BUILD_NUMBER='%system.build.number%' --build-arg TEAMCITY_BUILD_CONF_NAME='%system.teamcity.buildConfName%' --build-arg TEAMCITY_BUILD_BRANCH='%teamcity.build.branch%' --build-arg TEAMCITY_PROJECT_NAME='%system.teamcity.projectName%%%' --build-arg TEAMCITY_VERSION='%system.teamcity.version%%'"
            }
        }
    }

    triggers {
        vcs {
        }
    }

    features {
        perfmon {
        }
    }
})
