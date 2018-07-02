//copied from https://github.com/smooth-code/svgr/blob/master/packages/core/src/templates/reactNativeTemplate.js
//only edit needed is to force the fill to use props.color

const getProps = config => {
    const props = []
    if (config.ref) props.push('svgRef')
    if (config.titleProp) props.push('title')
    if (config.expandProps) props.push('...props')
  
    if (props.length === 0) return '()'
    if (props.length === 1 && config.expandProps) return 'props'
  
    return `({ ${props.join(', ')} })`
}

const getComponents = components => {
  if (!components.size) return ''
  const componentsStr = [...components]
    .filter(component => component !== 'Svg')
    .join(', ')
  return `, { ${componentsStr} }`
}

const getWarning = components => {
  if (!components.size) return ''
  const componentList = [...components].join(', ')
  return `
// SVGR has dropped some elements not supported by react-native-svg: ${componentList}
`
}

const reactNativeTemplate = (code, config, state) => {
  const {
    reactNativeSvgReplacedComponents = new Set(),
    unsupportedComponents = new Set(),
  } = state

  const props = getProps(config)
  const components = getComponents(reactNativeSvgReplacedComponents)
  const warnLog = getWarning(unsupportedComponents)

  code = code.replace(/fill=.*? /, 'fill={props.color}'); //custom code

  let result = `import React from 'react'\n`
  result += `import Svg${components} from 'react-native-svg';\n`
  result += warnLog
  result += `const ${state.componentName} = ${props} => ${code}\n\n`
  result += `export default ${state.componentName}`

  return result
}

module.exports = {
  default: reactNativeTemplate
}