import React from "react"

export const Name = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <div style={{ padding: '16px', backgroundColor: 'gray' }}>
            <label htmlFor="name">名前</label>
            <input id="name" type="text" className="input-name" onChange={ onChange } />
        </div>
    )
}