import React from "react"
import styled, {DefaultTheme, ThemeProvider} from "styled-components"

const theme: DefaultTheme = {
    colors: ["blue","red","green","purple","yellow"],
    bgColors: ["lightgray", "gray"]
}

const TableRow = styled.tr<{idx: number}>`
    background-color: ${({theme, idx}) => theme.bgColors[idx%2]}
`

const TableCell = styled.td<{colorIdx: number}>`
    color: ${({theme, colorIdx}) => theme.colors[colorIdx]}
`


const App_CSS_IN_JS: React.FC = () => {
    let rows = []
    
    for (let i = 0; i < 50; i++) {
        rows.push(<TableRow key={i} idx={i}>
            <td>{i}</td>
            <TableCell colorIdx={Math.floor(Math.random() * (4) + 1 )}>
                {Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}
            </TableCell>
        </TableRow>)
    }

    return <ThemeProvider theme={theme}>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row) => row)
                }
            </tbody>
        </table>
    </ThemeProvider>
}

export default App_CSS_IN_JS