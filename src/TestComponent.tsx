import React, {useEffect} from 'react';
import postData from "./postData.ts";

const TestComponent = ({children}) => {
    useEffect(() => {
        postData()
    }, []);

    return (
        <div>
            <p>{children}</p>
        </div>
    );
};

export default TestComponent;