<script>
  
  import { getContext } from "svelte"	
  import 'dayjs/locale/pt.js'
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import bootstrap5Plugin from '@fullcalendar/bootstrap5'
  import FullCalendar from 'svelte-fullcalendar';
  import daygridPlugin from '@fullcalendar/daygrid';
  import listPlugin from '@fullcalendar/list';
  import { onMount } from "svelte";
 
 
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
  
  let eventsList = []

  $:{
    
  }
  onMount(()=>{
    console.log(language, 'lang')
    if(eventsList.length > 0){
      eventsList = []
    }
    if(dataProvider.rows){
      dataProvider.rows.forEach(event => {
        let eventColor = mappingColor ?? '#313131'           
        eventsList.push({ title: event[mappingTitle], date: event[mappingDate], color: eventColor, event: event   })        
      });
    }
    if(dataProvider2.rows){
      dataProvider2.rows.forEach(event => {
        let eventColor2 = mappingColor2 ?? '#eb4034' 
        eventsList.push({ title: event[mappingTitle2], date: event[mappingDate2], color: eventColor2, event: event  })
      });
    }
    eventsList = eventsList
  })

  let options  = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    plugins: [daygridPlugin, listPlugin, bootstrap5Plugin],
    themeSystem: 'bootstrap5',
    initialDate:  Date.now(),
    locale: 'pt',
    dayMaxEvents: true,
    eventClick: (event)=>{
      calendarEvent({
        value: event.event
      })
      console.log(JSON.parse(text))
      console.log(event.event.title)
    },
    events:eventsList,
    eventColor: '#378006'
  }
  const { styleable } = getContext("sdk") 
  const component = getContext("component")

</script>

<div use:styleable={$component.styles}>
  <FullCalendar {options} />
</div>

