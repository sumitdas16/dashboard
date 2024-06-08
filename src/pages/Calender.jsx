import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import React from 'react'
import Header from "../components/Header";
import { useStateContext } from "../context/ContextProvider";


const Calender = () => {

  const { currentMode ,currentColor} = useStateContext()
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    console.log(selected);
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px" >
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="space-between">
          {/* CALENDAR SIDEBAR */}
          <Box
            flex="1 1 20%"
            backgroundColor={currentMode === "Light" ? 'white' : "black"}
            p="15px"
            borderRadius="4px"
          >
            <Typography variant="h5" color={currentMode === "Light" ? "black" : 'white'}>Events</Typography>
          <List>
            {
              currentEvents.map((event, i) => (
                <ListItem
                key={event.id}
                sx={{
                  backgroundColor:`${currentMode === "Light" ? 'white' : "black"}` ,
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                 
                  primary={<Typography color={currentColor}>
                    {event.title}
                  </Typography>}
                  secondary={
                    <Typography>
                      {/* {FullCalendar.(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })} */}
                    </Typography>
                  }
                />
              </ListItem>
              ))
            }
          </List>
          </Box>
        </Box>
        {/* //NOTE - Calender */}
        <Box flex="1 1 100%" ml="15px" >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calender
