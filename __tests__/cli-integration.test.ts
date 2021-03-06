const { system, filesystem } = require('gluegun')

const src = filesystem.path(__dirname, '..')

const cli = async cmd =>
  system.run(
    'node ' + filesystem.path(src, 'bin', 'create-node-app') + ` ${cmd}`
  )

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('1.0.5')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('1.0.5')
})
