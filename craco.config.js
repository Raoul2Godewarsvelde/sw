const path = require(`path`)
const alias = require(`./src/Config/Craco/aliases`)

const SRC = `./`
const aliases = alias(SRC)

const resolvedAliases = Object.fromEntries(
	Object.entries(aliases).map(([key, value]) => [
		key,
		path.resolve(__dirname, value),
	])
)

module.exports = {
	webpack: {
		alias: resolvedAliases,
	},
}
