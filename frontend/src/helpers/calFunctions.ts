// import ical
const ical = require('node-ical');

// const calFile = ;

// use the sync function parseFile() to parse this ics file
const events = ical.sync.parseFile('example-calendar.ics');
// loop through events and log them
for (const event of Object.values(events)) {
    console.log(
      event
        // 'Summary: ' + event.summary +
        // '\nDescription: ' + event.description +
        // '\nStart Date: ' + (event.start ? event.start.toISOString() : 'No start date available') +
        // '\n'
    );
};


// event object
// {
//   type: 'VEVENT',
//   params: [],
//   start: 2024-08-14T21:00:00.000Z { tz: 'America/Toronto' },
//   datetype: 'date-time',
//   end: 2024-08-14T21:30:00.000Z { tz: 'America/Toronto' },
//   rrule: RRule {
//     _cache: Cache { all: false, before: [], after: [], between: [] },
//     origOptions: {
//       tzid: 'America/Toronto',
//       dtstart: 2024-08-14T17:00:00.000Z,
//       freq: 2,
//       wkst: [Weekday],
//       until: 2024-09-11T03:59:59.000Z,
//       interval: 2,
//       byweekday: [Array]
//     },
//     options: {
//       freq: 2,
//       dtstart: 2024-08-14T17:00:00.000Z,
//       interval: 2,
//       wkst: 6,
//       count: null,
//       until: 2024-09-11T03:59:59.000Z,
//       tzid: 'America/Toronto',
//       bysetpos: null,
//       bymonth: null,
//       bymonthday: [],
//       bynmonthday: [],
//       byyearday: null,
//       byweekno: null,
//       byweekday: [Array],
//       bynweekday: null,
//       byhour: [Array],
//       byminute: [Array],
//       bysecond: [Array],
//       byeaster: null
//       completedTask: 2024-10-17
//     }
//   },
//   exdate: [ '2024-08-28': 2024-08-28T21:00:00.000Z { tz: 'America/Toronto' } ],
//   dtstamp: 2024-10-17T00:55:55.000Z { tz: 'Etc/UTC' },
//   organizer: {
//     params: { CN: 'mayette.besana@lighthouselabs.com' },
//     val: 'mailto:mayette.besana@lighthouselabs.com'
//   },
//   uid: '1m4hk8f9fq2v5teqp2he4f7jta_R20240814T210000@google.com',
//   attendee: [
//     { params: [Object], val: 'mailto:hanvidlee@gmail.com' },
//     {
//       params: [Object],
//       val: 'mailto:lauren.alexander@lighthouselabs.com'
//     },
//     { params: [Object], val: 'mailto:nessymonster86@gmail.com' },
//     { params: [Object], val: 'mailto:philippe.teigne@gmail.com' },
//     { params: [Object], val: 'mailto:shafaq.saud@gmail.com' }
//   ],
//   'GOOGLE-CONFERENCE': 'https://meet.google.com/ygh-avzk-nry',
//   created: 2024-07-16T17:56:06.000Z { tz: 'Etc/UTC' },
//   description: '-::~:~::~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~::~:~::-\n' +
//     'Join with Google Meet: https://meet.google.com/ygh-avzk-nry\n' +
//     'Or dial: (CA) +1 604-774-8372 PIN: 895880746#\n' +
//     'More phone numbers: https://tel.meet/ygh-avzk-nry?pin=8643596991048&hs=7\n' +
//     '\n' +
//     'Learn more about Meet at: https://support.google.com/a/users/answer/9282720\n' +
//     '\n' +
//     'Please do not edit this section.\n' +
//     '-::~:~::~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~::~:~::-',
//   lastmodified: 2024-10-16T12:59:54.000Z { tz: 'Etc/UTC' },
//   sequence: '1',
//   status: 'CONFIRMED',
//   summary: 'Web/Data Group Coaching',
//   transparency: 'OPAQUE',
//   method: 'PUBLISH'
// }


// or just parse some iCalendar data directly
const directEvents = ical.sync.parseICS(`
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Hey look! An example event!
DTSTART;TZID=America/New_York:20130802T103400
DTEND;TZID=America/New_York:20130802T110400
LOCATION:1000 Broadway Ave.\, Brooklyn
DESCRIPTION: Do something in NY.
STATUS:CONFIRMED
UID:7014-1567468800-1567555199@peterbraden@peterbraden.co.uk
END:VEVENT
END:VCALENDAR
`);
// log the ids of these events
console.log(Object.keys(directEvents));

const validateDate = (item, date) => {
  // item in recurring date range
  if (item.recurrence === date) {
    if (item.voidDate === date) {
      return;
    }
    if (item.completed === date) {
      return;
    }
  }

  if (item.exception === date) {
    if (item.completed === date) {
      return;
    }
  }
}