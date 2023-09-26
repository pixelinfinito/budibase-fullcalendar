export const langs =  [
    {
        code: 'pt',
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
    },
    {
    code: 'de',
    week: {
        dow: 1,
        doy: 4,
    },
    buttonText: {
        prev: 'Zurück',
        next: 'Weiter',
        today: 'Heute',
        year: 'Jahr',
        month: 'Monat',
        week: 'Woche',
        day: 'Tag',
        list: 'Terminübersicht',
    },
    weekText: 'Woch.',
    allDayText: 'Ganzer Tag',
    moreLinkText: 'mehr',
    noEventsText: 'Keine Ereignisse anzuzeigen',
    },
    {
        code: 'it',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: 'Precedente',
            next: 'Successivo',
            today: 'Oggi',
            year: 'Anno',
            month: 'Mese',
            week: 'Settimana',
            day: 'Giorno',
            list: 'Agenda',
        },
        weekText: 'Sett.',
        allDayText: 'Tutto il giorno',
        moreLinkText: 'altro',
        noEventsText: 'Non ci sono eventi da mostrare',
    },
    {
        code: 'nl',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: 'Vorige',
            next: 'Volgende',
            today: 'Vandaag',
            year: 'Jaar',
            month: 'Maand',
            week: 'Week',
            day: 'Dag',
            list: 'Agenda',
        },
        weekText: 'Week',
        allDayText: 'Hele dag',
        moreLinkText: 'meer',
        noEventsText: 'Geen evenementen om te tonen',
    },
    {
        code: 'zh-CN',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: '上一步',
            next: '下一步',
            today: '今天',
            year: '年',
            month: '月',
            week: '周',
            day: '日',
            list: '日程',
        },
        weekText: '周',
        allDayText: '整天',
        moreLinkText: '更多',
        noEventsText: '没有要显示的事件',
    },
        {
            code: 'ar',
            week: {
                dow: 6,
                doy: 4,
            },
            buttonText: {
                prev: 'السابق',
                next: 'التالي',
                today: 'اليوم',
                year: 'السنة',
                month: 'الشهر',
                week: 'الأسبوع',
                day: 'اليوم',
                list: 'جدول',
            },
            weekText: 'أسبوع',
            allDayText: 'طوال اليوم',
            moreLinkText: 'المزيد',
            noEventsText: 'لا يوجد أحداث لعرضها',
        },
        {
        code: 'ja',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: '前',
            next: '次',
            today: '今日',
            year: '年',
            month: '月',
            week: '週',
            day: '日',
            list: '予定',
        },
        weekText: '週',
        allDayText: '終日',
        moreLinkText: '他',
        noEventsText: '表示するイベントはありません',
    },
    {
        code: 'ko',
        week: {
            dow: 0,
            doy: 4,
        },
        buttonText: {
            prev: '이전',
            next: '다음',
            today: '오늘',
            year: '년',
            month: '월',
            week: '주',
            day: '일',
            list: '일정',
        },
        weekText: '주',
        allDayText: '종일',
        moreLinkText: '더 보기',
        noEventsText: '표시할 이벤트가 없습니다',
    },
    {
        code: 'sv',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: 'Föregående',
            next: 'Nästa',
            today: 'Idag',
            year: 'År',
            month: 'Månad',
            week: 'Vecka',
            day: 'Dag',
            list: 'Schema',
        },
        weekText: 'V.',
        allDayText: 'Hela dagen',
        moreLinkText: 'mer',
        noEventsText: 'Inga händelser att visa',
    },
    {
        code: 'no',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: 'Forrige',
            next: 'Neste',
            today: 'I dag',
            year: 'År',
            month: 'Måned',
            week: 'Uke',
            day: 'Dag',
            list: 'Agenda',
        },
        weekText: 'Uke',
        allDayText: 'Hele dagen',
        moreLinkText: 'mer',
        noEventsText: 'Ingen hendelser å vise',
    },
    {
        code: 'hi',
        week: {
            dow: 1,
            doy: 4,
        },
        buttonText: {
            prev: 'पिछला',
            next: 'अगला',
            today: 'आज',
            year: 'वर्ष',
            month: 'माह',
            week: 'सप्ताह',
            day: 'दिन',
            list: 'कार्यक्रम',
        },
        weekText: 'सप्ताह',
        allDayText: 'पूरा दिन',
        moreLinkText: 'और देखें',
        noEventsText: 'प्रदर्शित करने के लिए कोई घटना नहीं है',
    }
]

export function codeLang(lang) {
    const code = langs.findIndex(item => item.code === lang);
    
    if (code === -1) {
        console.warn(`Unknown language code: ${lang}`);
        return null;
    }
    
    console.log(code, 'code', lang);
    return code;
}
