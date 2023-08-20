import { VictoryPie } from 'victory'

import { GraphContainer, GraphWrapper } from './ClientsStatsGraphs.styles'

export default function ClientsStatsGraphs({ genders }) {

    return (
        <GraphContainer>
            <GraphWrapper>
                <VictoryPie
                    data={
                        [
                            { x: 'Masculino', y: genders.MASCULINO },
                            { x: 'Feminino', y: genders.FEMININO },
                            { x: 'Outros', y: genders.OUTRO }
                        ]
                    }
                    padding={{ left: 80, right: 80 }}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: "#FFF",
                            strokeWidth: 1.5
                        },
                        labels: {
                            fontSize: 14,
                            fill: "#333"
                        }
                    }}
                />
            </GraphWrapper>

            <GraphWrapper >
                <VictoryPie
                    data={
                        [
                            { x: 'Masculino', y: genders.MASCULINO },
                            { x: 'Feminino', y: genders.FEMININO },
                            { x: 'Outros', y: genders.OUTRO }
                        ]
                    }
                    padding={{ left: 80, right: 80 }}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: "#FFF",
                            strokeWidth: 1.5
                        },
                        labels: {
                            fontSize: 14,
                            fill: "#333"
                        }
                    }}
                />
            </GraphWrapper>

            <GraphWrapper style={{ height: '300px' }} >
                <VictoryPie
                    data={
                        [
                            { x: 'Masculino', y: genders.MASCULINO },
                            { x: 'Feminino', y: genders.FEMININO },
                            { x: 'Outros', y: genders.OUTRO }
                        ]
                    }
                    padding={{ left: 80, right: 80 }}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: "#FFF",
                            strokeWidth: 1.5
                        },
                        labels: {
                            fontSize: 14,
                            fill: "#333"
                        }
                    }}
                />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis rerum quam voluptate eum, corporis eius nisi numquam assumenda ex mollitia quas voluptates error consectetur? Rem reprehenderit consectetur aperiam odio autem.</p>
            </GraphWrapper>
        </GraphContainer >
    )
}