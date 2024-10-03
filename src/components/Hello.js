import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         hello2
    //     </div>
    // )

    return React.createElement('div',null, React.createElement('h1',null,"hello js tag"))
}
export default Hello;
