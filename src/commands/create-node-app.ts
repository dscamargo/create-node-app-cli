
import { GluegunCommand } from 'gluegun'
import runCommandsAfterCreated from '../utils/runCommandsAfterCreated'
import * as validations from '../utils/validate'

const BASE_REPO_SSH_URL = 'git@github.com:dscamargo/template-nodejs-typescript.git'
const PATH_NAME = 'new-node-app'

const command: GluegunCommand = {
  name: 'create-node-app',
  run: async toolbox => {

    const timer = toolbox.system.startTimer();

    const { print, system, filesystem, parameters  } = toolbox
    const haveGitInstalled = !!system.which('git')
    const haveNodeInstalled = !!system.which('node')
    const projectTemplate = parameters.options.template || BASE_REPO_SSH_URL || ''
    const pathName = parameters.first || PATH_NAME

    if (validations.dependenciesValidate({ haveGitInstalled, haveNodeInstalled })){
      print.error(validations.dependenciesValidate({ haveGitInstalled, haveNodeInstalled }));
      return;
    }
    
    if (validations.inputValidate({ projectTemplate, pathName })){
      print.error(validations.inputValidate({pathName, projectTemplate}));
      return;
    }

    const existsPathname = filesystem.exists(`${filesystem.cwd()}/${pathName}`)

    if (existsPathname){
      print.error(`Já existe uma pasta nesse diretório com o nome '${pathName}', remova e tente novamente`);
      return;
    }

    await system.run(`git clone ${projectTemplate} ${pathName}`, { trim: true })
    await system.run(runCommandsAfterCreated(pathName).join(' && '))

    print.success(`Finalizado.`)
    print.success(`O Processo levou ${timer()} ms.`)
  },
}

module.exports = command
