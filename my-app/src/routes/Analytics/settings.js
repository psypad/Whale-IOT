export let chartType = 'bar'

export let myData = {
	labels: ["Node 1", "Node 2", "Node 3", "Node 4"],
	datasets: [
		{
			label: "Uptime of node",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
			data: [42, 32, 23, 52],
			tension: 0.32,
			borderWidth: 1,
		}
	],
}

export let myOptions = {
	options: {
		responsive: true,
		maintainAspectRatio: false,
	},
}