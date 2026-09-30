import {
  CalendarLtrRegular,
  ClockRegular,
  LocationRegular,
} from '@fluentui/react-icons'

export type EventDetail = {
  label: string
  value: string
  icon: typeof CalendarLtrRegular
}

export const eventDetails: EventDetail[] = [
  { label: 'Date', value: 'Saturday, June 20, 2026', icon: CalendarLtrRegular },
  { label: 'Time', value: '2:00 to 5:00 in the afternoon', icon: ClockRegular },
  {
    label: 'Location',
    value: 'The Garden Room, 18 Willow Lane',
    icon: LocationRegular,
  },
]
