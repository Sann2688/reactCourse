import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

function Chart (props) {
    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const max = Math.max(...values);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={max} />
            ))}
        </div>
    );
}

export default Chart;