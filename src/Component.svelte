<script>
  
  import { getContext } from "svelte"	
  import '@fullcalendar/core/locales-all'
  import FullCalendar from 'svelte-fullcalendar';
  import daygridPlugin from '@fullcalendar/daygrid';
  import listPlugin from '@fullcalendar/list';
  import { onMount } from "svelte";
  import {langs, codeLang} from "./lang"
 
  export let language
  export let calendarEvent
  
  export let mappingTitle
  export let mappingDate
 
  export let mappingTitle2
  export let mappingDate2

  export let dataProvider
  export let dataProvider2

  export let mappingColor
  export let mappingColor2

  export let allday
  export let allday2
  
  let eventsList = []
  onMount(()=>{
    
    if(eventsList.length > 0){
      eventsList = []
    }
    if(dataProvider.rows){
      dataProvider.rows.forEach(event => {
        let eventColor = mappingColor ?? '#313131'           
        eventsList.push({ title: event[mappingTitle], date: event[mappingDate], start: event[mappingStart], end: event[mappingEnd], color: eventColor, event: event, allDay: allday   })        
      });
    }
    if(dataProvider2.rows){
      dataProvider2.rows.forEach(event => {
        let eventColor2 = mappingColor2 ?? '#eb4034' 
        eventsList.push({ title: event[mappingTitle2], date: event[mappingDate2], start: event[mappingStart2], end: event[mappingEnd2], color: eventColor2, event: event, allDay: allday2  })
      });
    }
    eventsList = eventsList
  })

  let options  = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    plugins: [daygridPlugin, listPlugin],
    initialDate:  Date.now(),
    locale: language,
    dayMaxEvents: true,
    eventClick: (event)=>{
      calendarEvent({
        value: event.event
      })
      console.log(JSON.parse(text))
      console.log(event.event.title)
    },
    events:eventsList,
    eventColor: '#378006',
    theme: true,
    ...langs[codeLang(language)]
  }
  const { styleable } = getContext("sdk") 
  const component = getContext("component")

</script>

<div use:styleable={$component.styles}>
  <FullCalendar {options} />
</div>