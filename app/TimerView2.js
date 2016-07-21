import React from 'react'

export default ({time, name, working, toggle}) => {

    return <div>
        Timer #{name || 2}: {time}
        <button onClick={toggle}>{working ? 'stop' : 'go'}</button>
    </div>;
}

