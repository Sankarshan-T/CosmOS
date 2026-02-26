import React from "react";

interface OSLayoutProps {
    children: React.ReactNode;
}

const OSLayout = ({
    children,
}: OSLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default OSLayout;