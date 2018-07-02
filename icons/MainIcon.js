import React, {Component} from "react";

const Icon = (Icons) => ({name, ...props}) => {
    //dynamic imports with variable paths fail in nextjs. https://github.com/zeit/next.js/issues/4433
    //will need to manually define an index file, until the above code is merged... to avoid monkeypatching

    // import(
    //     `web/${name}`
    // ).then(Component => {
    //     return <Component {...props} />;
    // }).catch({
    //     //
    // })

    const Component = Icons[name];
    
    return <Component {...props} />;
};

// Icon.propTypes = {
//     name: PropTypes.string.is.required,
//     style: PropTypes.object,
//     height: PropTypes.string.isRequired,
//     width: PropTypes.string.isRequired,
// };

export default Icon;