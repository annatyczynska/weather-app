import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Table>
                <TableHead />
                <TableBody />
            </Table>
            </div>
        );
    }
}

const Table = ({children}) => {
    return (
        <table>
            {children}
        </table>
    )

}
const TableHead = () => {
    return (
    <thead>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </thead>
    )
}

const TableBody = () => {
    return (
    <tbody>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>$80</td>
        </tr>
        <tfoot>
        <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr>
        </tfoot>
      </tbody>
    )
}

export default App;