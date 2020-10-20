console.log('Env Parameter: ', process.env.LIMITS)

module.exports = {
    env: {
      limits: process.env.LIMITS,
    },
  }