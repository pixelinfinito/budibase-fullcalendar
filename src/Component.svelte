<script>
  import { getContext } from "svelte"
  
  import { InlineCalendar, themes } from 'svelte-calendar';
	
  import 'dayjs/locale/pt.js'
  import dayjs from "dayjs"
  import {onDestroy} from "svelte"

  export let text
  export let calendarTheme
  const { dark, light } = themes;

  const { styleable } = getContext("sdk") 
  const component = getContext("component")
  
  const theme = dark

  let locale = "pt"

  $: dayjs.locale(locale)

  onDestroy(()=> dayjs.locale("pt"))

</script>

<div use:styleable={$component.styles}>
  <InlineCalendar value={{locale}} {theme} />
</div>

