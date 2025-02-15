import React from 'react';
import UseAnimations from 'react-useanimations';

import error from 'react-useanimations/lib/error';

interface PageErrorProps {
    message: string
};


const PageError = ({ message = "Something went wrong" }: PageErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <UseAnimations animation={error} size={56} />
            <p className="text-sm font-medium text-muted-foreground">{message}</p>
        </div>
    );
};

export default PageError;