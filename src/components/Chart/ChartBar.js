import "./ChartBar.css";
const ChartBar = (props) => {
	console.log("📈", props.value / props.maxValue);
	let barFillHeight = '0%';
	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
	}
	return (
		// .chart-bar>(.chart-bar__inner>.chart-bar__fill)+.chart-bar__label
		<div className='chart-bar'>
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};
export default ChartBar;
