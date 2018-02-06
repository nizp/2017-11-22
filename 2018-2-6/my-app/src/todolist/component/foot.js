import React from 'react';
export const Foot = (props) => {
    let {num} = props;
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{num}</strong>
                <span>条未选中</span>
            </span>
        </footer>
    )
}

export default Foot;


