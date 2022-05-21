import React, { Component } from 'react';

class TableBody extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, columns } = this.props;

        return (
            <tbody>
                {data.map(item =>
                    <tr>
                        {columns.map(column => <td></td>)}
                    </tr>)}
            </tbody>);
    }
}

export default TableBody;