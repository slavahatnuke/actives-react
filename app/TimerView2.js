import React from 'react'

export default ({time, working, toggle}) => {

    return <div>
        Timer #2: {time}
        <button onClick={toggle}>{working ? 'stop' : 'go'}</button>
    </div>;
}

