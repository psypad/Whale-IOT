<script context="module">
	import { chartType, myData, myOptions } from './settings'
</script>

<script>
	import Select from './Select.svelte'
	import Chart from './Chart.svelte'
	
	let type = chartType
	let data = myData
	let options = myOptions
	
	$: config = {
		type,
		data,
		options
	}
</script>

<Select bind:type />

<Chart {config} />