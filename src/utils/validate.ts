export const  dependenciesValidate = ({ haveGitInstalled, haveNodeInstalled }: { haveGitInstalled: boolean; haveNodeInstalled: boolean }): string => {
  if (!haveGitInstalled){
    return 'Necessário ter o Git instalado para o funcionamento correto da CLI.'
  }
  if (!haveNodeInstalled){
    return 'Necessário ter o Node instalado para o funcionamento correto da CLI.'
  }

  return ''
}

export const inputValidate = ({ projectTemplate, pathName }: { projectTemplate: string; pathName: string }): string => {
  if (!projectTemplate){
    return 'Template não definido'
  }
  
  if (!pathName){
    return 'Pasta do novo projeto não definida'
  }

  return ''
}