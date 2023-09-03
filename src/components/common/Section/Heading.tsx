import React from 'react';

/* string properties */
interface HeadingProps {
    headingText: string;
}


const Heading: React.FC<HeadingProps> = ({ headingText }) => {
    return (
        <>
            <h2 className="text-4xl text-secondary font-bold">{headingText}</h2>
        </>
    );
}

export default Heading;
