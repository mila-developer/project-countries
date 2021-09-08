import React from 'react';

import './list.scss';

const ListItem = ({onChange, onDelete, value}) => {
    return (
        <div className="Item-container">
            <input
            className="Item-field"
            value={value}
            onChange={onChange}
            />
            <button class="btn-delete" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ListItem;