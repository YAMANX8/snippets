function getCordsFormElement(field) {
    const outerUpperLeft = {
        xCords: parseInt(field.getBoundingClientRect().left),
        yCords: parseInt(field.getBoundingClientRect().top)
    }
    const outerUpperRight = {
        xCords: parseInt(field.getBoundingClientRect().right),
        yCords: parseInt(field.getBoundingClientRect().top)
    }
    const outerBottomRight = {
        xCords: parseInt(field.getBoundingClientRect().left + field.offsetWidth),
        yCords: parseInt(field.getBoundingClientRect().top + field.offsetHeight)
    }
    const outerBottomLeft = {
        xCords: parseInt(field.getBoundingClientRect().left),
        yCords: parseInt(field.getBoundingClientRect().bottom)
    }
    const innerUpperLeft = {
        xCords: parseInt(field.getBoundingClientRect().left + field.clientLeft),
        yCords: parseInt(field.getBoundingClientRect().top + field.clientTop)
    }
    const innerUpperRight = {
        xCords: parseInt(field.getBoundingClientRect().left + field.clientLeft + field.clientWidth),
        yCords: parseInt(field.getBoundingClientRect().top + field.clientTop + field.clientHeight)
    }

    const innerBottomRight = {
        xCords: parseInt(field.getBoundingClientRect().left + field.clientLeft + field.clientWidth),
        yCords: parseInt(field.getBoundingClientRect().top + field.clientTop + field.clientHeight)
    }
    const innerBottomLeft = {
        xCords: parseInt(field.getBoundingClientRect().left + field.clientLeft),
        yCords: parseInt(field.getBoundingClientRect().top + field.clientTop + field.clientHeight)
    }
    return {
        outerUpperLeft,
        outerUpperRight,
        outerBottomRight,
        outerBottomLeft,
        innerUpperLeft,
        innerUpperRight,
        innerBottomRight,
        innerBottomLeft
    }
}
// clientLeft property: it's for getting the left border width;
// clientTop property: the same of clientLeft but for the top border;
console.log(getCordsFormElement(document.querySelector("#field")));
