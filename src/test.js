 /* const { styleable } = getContext("sdk") 
  const component = getContext("component")

  const options =  ref({
    plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialDate:  Date.now(),
    
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable:true, 
    selectMirror: true, 
    dayMaxEvents: true,
    events: [],
    
    locale: 'pt',
    
    eventClick: (event: any)=>{
        const dataObjective = objectivesList.value.filter((objective:any) => objective.goalID == event.event.id)
        showObjective(dataObjective[0])
    }

    <FullCalendar  :options="options" >
                            <template v-slot:eventContent='arg'>
                                <i class="textInforCalendar" :style="`background-color: ${arg.event.backgroundColor}; color: ${arg.event.backgroundColor ? '#FFF' : ''}`" >{{ arg.event.title }}</i>
                            </template>
                        </FullCalendar>
}) */



/* {
    "type": "text",
    "key": "mappingTitle2",
    "label": "Title Mapping (Event Group 2)"
  },
  
  {
    "type": "text",
    "key": "mappingDate2",
    "label": "Date Mapping (Event Group 2)"
  },
  {
    "type": "text",
    "key": "mappingColor2",
    "label": "Color Mapping (Event Group 2)"
  }, */