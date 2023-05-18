import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
	const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
	console.log("dataPointValue",dataPointValue);
	const totalMax = Math.max(...dataPointValue);
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => {
				return <ChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.label} />;
			})}
		</div>
	);
};
export default Chart;
