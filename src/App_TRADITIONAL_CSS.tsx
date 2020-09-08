import React from "react"
import "./index.scss"

const colors = ["blue","red","green","purple","yellow"]
const bgColors = ["lightgray", "gray"]

const App_TRADITIONAL_CSS: React.FC = () => {
    let rows = []
    
    for (let i = 0; i < 50; i++) {
        rows.push(<tr key={i} className={`${bgColors[i%2]}`}>
            <td>{i}</td>
            <td className={`${colors[Math.floor(Math.random() * (4) + 1 )]}`}>
                {Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}
            </td>
        </tr>)
    }

    return <table>
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
}

export default App_TRADITIONAL_CSS