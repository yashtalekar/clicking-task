import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data, keys, legends, layout }) => {

    return <>
        <ResponsiveBar
        data={data}
        keys={keys}
        layout={layout}
        indexBy="candidate"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        maxValue={100}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={legends}
        role="application"
        ariaLabel="Chart"
        label={d => d.value+"%"}
    />
    </>
}

export default BarChart;