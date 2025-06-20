import { CalendarView } from "@/components/calendar-view"

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Schedule and track property-related events and appointments</p>
        </div>
      </div>

      <CalendarView />
    </div>
  )
}
