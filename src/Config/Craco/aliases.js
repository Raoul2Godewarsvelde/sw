const aliases = (prefix = `src`) => ({
	'@public': `${prefix}/public`,
	'@root': `${prefix}/src`,

	'@assets': `${prefix}/src/Assets`,
	'@components': `${prefix}/src/Components`,
	'@config': `${prefix}/src/Config`,
	'@contexts': `${prefix}/src/Contexts`,
	'@hooks': `${prefix}/src/Hooks`,
	'@json': `${prefix}/src/Json`,
	'@lib': `${prefix}/src/Lib`,
	'@pages': `${prefix}/src/Pages`,
	'@styles': `${prefix}/src/Styles`,
	'@utils': `${prefix}/src/Utils`
});

module.exports = aliases;
