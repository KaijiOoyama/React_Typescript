import React from "react";

type ContainerProps = {
    title: string,
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
    const {title, children} = props

    return (
        <>
            <span>{title}</span>
            <div style={{background: 'gray', padding: '20px'}}>
                {children}
            </div>
        </>
    )
}