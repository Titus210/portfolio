import React from 'react';

/* string properties */
interface HeadingProps {
    headingText: string;
}


const Heading: React.FC<HeadingProps> = ({ headingText }) => {
    return (
        <>
            <h2 className="text-3xl">{headingText}</h2>
        </>
    );
}

export default Heading;
