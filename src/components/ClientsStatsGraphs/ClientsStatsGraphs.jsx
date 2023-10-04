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

            <p style={{ alignSelf: 'center' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed soluta eligendi. Possimus est saepe nostrum, assumenda alias nemo, sapiente odio iste dolor consequuntur accusantium placeat exercitationem laboriosam quam totam?</p>

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

            <p style={{ alignSelf: 'center' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed soluta eligendi. Possimus est saepe nostrum, assumenda alias nemo, sapiente odio iste dolor consequuntur accusantium placeat exercitationem laboriosam quam totam?</p>


            <GraphWrapper style={{ gridColumn: '1 / 5', maxHeight: '250px' }} >
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
        </GraphContainer >
    )
}