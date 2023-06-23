# BudiBase FullCalendar
<img src="src/images/calendar.png" />


## Description
It's a component to implement fullcalendar in your budibase.

## Installation
To install the plugin for Budibase, follow these steps:

1. Copy the repository link ```https://github.com/pixelinfinito/budibase-fullcalendar.git```.
2. Open Budibase and navigate to the "Plugins" section.
3. Click add plugin.
4. Select GitHub source.
5. Put the link in the URL section


<p>The plugin will be installed automatically.</p>

## Use

After installing the plugin for Budibase, you can start using it in your application. 
The plugin adds full calendar and functionality to the platform, allowing you to further customize your application.
You can use up to two data sources, the first source is mandatory. You can differentiate the two data sources in the calendar by changing the colors.

1. First add a data source <p><img src="src/images/usage/2.png" /></p>
2. Add the calendar component inside the data source, you can search for FullCalendar <p><img src="src/images/usage/3.png" /></p>
3.  Configure the data that will be used, the fields <b>Title Mapping (Event Group 1) </b> and <b>Date Mapping (Event Group 1)</b> are mandatory <p><img src="src/images/usage/4.png" /></p>

## Features

1. Add events
2. Map data that appears in the calendar
3. Group data by color
4. Change language

## Available plugins
1. DayGrid ([Month View](https://fullcalendar.io/docs/month-view), [DayGrid View](https://fullcalendar.io/docs/daygrid-view))
2. List ([List View](https://fullcalendar.io/docs/list-view))
3. TimeGrid ([TimeGrid View](https://fullcalendar.io/docs/timegrid-view))


## Contributing

If you want to contribute to the development of the plugin, follow these steps:

1. Fork this repository.
2. Create a new branch with your changes: ```git checkout -b my-branch```
3. Make the desired changes and commit: ```git commit -m 'my changes```
4. Push your changes to your branch: ```git push origin my-branch```
5. Open a Pull Request to the original repository.4


## Instructions
To build this plugin run the following in your Budibase CLI:

```budi plugins --build```
You can also re-build everytime you make a change to your plugin with the command:

``` budi plugins --watch ```

## Known issues

There are currently no known issues. If you encounter any problems using the plugin for Budibase, please open an issue in this repository and describe the problem in detail.

## Find out more about [Budibase](https://github.com/Budibase/budibase).
