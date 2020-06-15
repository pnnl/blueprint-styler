const fs = require('fs')
const blueprintjsIcons = require('@blueprintjs/icons')

function generateSvgIcon(iconPath, iconSize) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconSize} ${iconSize}"><path d="${iconPath}"/></svg>`
}

function generateAndSaveSvgIcon(filePath, iconName, iconPath, iconSize) {
    const svgIcon = generateSvgIcon(iconPath, iconSize)
    fs.writeFile(`${filePath}/${iconName}.svg`, svgIcon, err => {
        if (err) console.error(err)
    })
}

function generateAndSaveSvgIcons(iconSvgPaths, iconSize) {

    // create Directorys if they dont exist
    const resourcesFolderPath = './node_modules/@blueprintjs/resources'
    const iconsFolderPath = `${resourcesFolderPath}/icons`
    const filePath = `${iconsFolderPath}/${iconSize}px`
    try {
        if (!fs.existsSync(resourcesFolderPath))
            fs.mkdirSync(resourcesFolderPath)
        if (!fs.existsSync(iconsFolderPath))
            fs.mkdirSync(iconsFolderPath)
        if (!fs.existsSync(filePath))
            fs.mkdirSync(filePath)
    } catch (err) {
        console.error(err)
    }

    for (const iconName in iconSvgPaths) {
        if (iconSvgPaths.hasOwnProperty(iconName)) {
            const iconPath = iconSvgPaths[iconName];
            generateAndSaveSvgIcon(filePath, iconName, iconPath, iconSize)
        }
    }

}

generateAndSaveSvgIcons(blueprintjsIcons.IconSvgPaths16, 16)
generateAndSaveSvgIcons(blueprintjsIcons.IconSvgPaths20, 20)
