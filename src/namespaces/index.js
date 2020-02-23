const namespaces = {
    xhtml: 'http://www.w3.org/1999/xhtml',
    svg: 'http://www.w3.org/2000/svg',
}

const svgs = [
    'animate',
    'animateMotion',
    'animateTransform',
    'audio',
    'canvas',
    'circle',
    'clipPath',
    'defs',
    'desc',
    'discard',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'foreignObject',
    'g',
    'iframe',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tspan',
    'unknown',
    'use',
    'video',
    'view',
]

const nsFor = type => {
    if (svgs.indexOf(type) == -1) {
        return namespaces.xhtml
    }
    return namespaces.svg
}

export default nsFor