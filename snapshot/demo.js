export const generateConfig = ()=> ({
  url: 'localhost',
  port: 8080,
  param: "?v=1"
})

export const generateConfigAnother = ()=> ({
  url: 'localhost',
  port: 8081,
  param: "?v=2",
  time: new Date()
})