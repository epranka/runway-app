import React from 'react';

export default function DebugDot(props) {
    const { x, y, ident } = props;

    return (
        <svg style={{ position: 'absolute', transform: `translate(${x / 10}px, ${y / 10}px)` }} viewBox="0 0 100 100" width="100" height="100">
            <text x="50" y="50" textAnchor="middle" alignmentBaseline="central">{ident}</text>
        </svg>
    )
}
