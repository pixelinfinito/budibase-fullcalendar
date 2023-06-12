export const langs =  [
    {
        week: {
            dow: 1,
            doy: 4, 
        },
        buttonText: {
            prev: 'Anterior',
            next: 'Seguinte',
            today: 'Hoje',
            year: 'Ano',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Agenda',
        },
        weekText: 'Sem',
        allDayText: 'Todo o dia',
        moreLinkText: 'mais',
        noEventsText: 'Não há eventos para mostrar',
    },
    {
        code: 'es',
        week: {
            dow: 1,
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: 'Ant',
            next: 'Sig',
            today: 'Hoy',
            year: 'Año',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            list: 'Agenda',
        },
        buttonHints: {
            prev: '$0 antes',
            next: '$0 siguiente',
            today(buttonText) {
                return (buttonText === 'Día') ? 'Hoy' :
                    ((buttonText === 'Semana') ? 'Esta' : 'Este') + ' ' + buttonText.toLocaleLowerCase();
            },
        },
        viewHint(buttonText) {
            return 'Vista ' + (buttonText === 'Semana' ? 'de la' : 'del') + ' ' + buttonText.toLocaleLowerCase();
        },
        weekText: 'Sm',
        weekTextLong: 'Semana',
        allDayText: 'Todo el día',
        moreLinkText: 'más',
        moreLinkHint(eventCnt) {
            return `Mostrar ${eventCnt} eventos más`;
        },
        noEventsText: 'No hay eventos para mostrar',
        navLinkHint: 'Ir al $0',
        closeHint: 'Cerrar',
        timeHint: 'La hora',
        eventHint: 'Evento',
    },
    {
        code: 'ru',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: 'Пред',
            next: 'След',
            today: 'Сегодня',
            year: 'Год',
            month: 'Месяц',
            week: 'Неделя',
            day: 'День',
            list: 'Повестка дня',
        },
        weekText: 'Нед',
        allDayText: 'Весь день',
        moreLinkText(n) {
            return '+ ещё ' + n;
        },
        noEventsText: 'Нет событий для отображения',
    },
    {
        code: 'fr',
        week: {
            dow: 1,
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: 'Précédent',
            next: 'Suivant',
            today: 'Aujourd\'hui',
            year: 'Année',
            month: 'Mois',
            week: 'Semaine',
            day: 'Jour',
            list: 'Planning',
        },
        weekText: 'Sem.',
        weekTextLong: 'Semaine',
        allDayText: 'Toute la journée',
        moreLinkText: 'en plus',
        noEventsText: 'Aucun évènement à afficher',
    }
]

export function codeLang(lang){
    let code
    
    switch(lang){
        case "pt":
            code = 0
        break;
        case "es":
            code = 1
        break;
        case "ru":
            code = 2
        break;
        case "fr":
            code = 3
        break;
    } 
    
    return code
}