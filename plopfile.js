// plopfile.js 文件
module.exports = function (plop) {
  plop.setGenerator('test', {
    description: 'generate a test',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入文件夹名称',
      },
      {
        type: 'input',
        name: 'less',
        message: '需要less文件吗？(y/n)',
      },
    ],
    actions: (data) => {
      const name = '{{name}}'
      let actions = []
      if (data.name) {
        actions.push({
          type: 'add',
          path: `src/${name}/index.vue`, // 文件生成后所在的位置
          templateFile: 'plop-templates/view/index.hbs', // 模板路径
          data: {
            name: name,
          },
        })
      }
      if (data.less === 'y') {
        actions.push({
          type: 'add',
          path: `src/${name}/index.less`, // 文件生成后所在的位置
          templateFile: 'plop-templates/index.less', // 模板路径
        })
      }
      return actions
    },
  })
}
