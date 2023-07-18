import { useEffect, useState } from 'react'
import { VictoryPie } from 'victory'

import { GraphWrapper } from './ClientsStatsGraphs.styles'

export default function ClientsStatsGraphs({ data }) {
    const [sexData, setSexData] = useState([]);

    useEffect(() => {

    }, [data])

    return (
        <GraphWrapper>
            <VictoryPie
                style={{ maxWidth: '400px' }}
                data={
                    [
                        { x: 'Masculino', y: 20 },
                        { x: 'Feminino', y: 32 },
                        { x: 'Outros', y: 3 }
                    ]
                }
            />
        </GraphWrapper>
    )
}