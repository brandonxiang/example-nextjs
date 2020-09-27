import {Page, getPrerenderProps} from '../modules/Home';
import {useEffect, useState} from 'react';

const CSR = () => {
    const [extraProps, setExtraProps] = useState({});

    useEffect(() => {
        getPrerenderProps().then(({props}) => {
            setExtraProps(props);
        }) 
    }, []);

    return <Page {...extraProps}/>
}

export default CSR;