export default function ProgressCircle({ percentage, color }) {
	return (
		<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
			<ellipse cx="55" cy="55" rx="50" ry="50"
				style={{
					fill: "none",
					strokeWidth: 2,
					stroke: "gray",
				}}
			/>
			<ellipse cx="55" cy="55" rx="50" ry="50"
				style={{
					fill: "none",
					strokeWidth: 2,
					stroke: color,
					strokeDasharray: `${2 * 50 * Math.PI * percentage / 100} ${2 * 50 * Math.PI * (100 - percentage) / 100}`,
					strokeLinecap: "round"
				}}
			/>
			<text x="50%" y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				style={{ fill: color }}
			>{percentage}</text>
		</svg>
	);
}