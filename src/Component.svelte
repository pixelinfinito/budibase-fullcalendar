<script>
  import { getContext } from "svelte"
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';
  export let text

  const { styleable } = getContext("sdk") 
  const component = getContext("component")

  let plugins = [TimeGrid];
  let options = {
    view: 'timeGridWeek',
    events: [
        // your list of events
    ]
  };

</script>

<div use:styleable={$component.styles}>
  This is a custom component. The text setting is: {text}.
  <Calendar {plugins} {options} />
</div>
