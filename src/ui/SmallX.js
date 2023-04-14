import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const SmallX = ({ onClick }) => (
    <div className="small-x">
        <span onClick={onClick}>
        <FontAwesomeIcon icon={faCircleXmark} style={{color: "#bdb3b3",}} />
        </span>
    </div>
);