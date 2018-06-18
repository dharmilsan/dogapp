import Router from 'next/router'

const gotoPage = (name, query = {}) => (e) => {
    Router.push({pathname: name, query});
}

/* pure function to make sure isSelected is only added once */
export const getHighlightedTabs = (tabProps, indexToHighlight) => {
    return tabProps.map((tab, index) => {
        if (index == indexToHighlight) {
            return {...tab, isSelected: true}
        } else {
            return {...tab}
        }
    });
}

/* define props and routes from here */

export const mainTabProps = [
    {name: 'Index', onPressHandler: gotoPage('/index'), iconClasses: "fas fa-home fa-lg"},
    {name: 'Applications', onPressHandler: gotoPage('/generic', {text: 'Applications', index: 1}), iconClasses: "fas fa-sticky-note fa-lg"},
    {name: 'Notes', onPressHandler: gotoPage('/generic', {text: 'Notes', index: 2}), iconClasses: "fas fa-info fa-lg"},
    {name: 'Settings', onPressHandler: gotoPage('/generic', {text: 'Settings', index: 3}), iconClasses: "fas fa-cog fa-lg"}
];