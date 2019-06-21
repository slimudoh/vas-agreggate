import React from 'react';

function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="nav-right">
                <li className="active">Service Provider</li>
                <li>Content Provider</li>
            </div>
            <div className="nav-left">
                Filter by :{" "}
                <select name="" id="">
                    <option value="">This Year</option>
                </select>
            </div>
        </div>
    );
}

export default NavBar;