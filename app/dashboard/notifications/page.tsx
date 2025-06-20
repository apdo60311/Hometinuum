import { NotificationsCenter } from "@/components/notifications-center"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with important alerts and messages</p>
        </div>
      </div>

      <NotificationsCenter />
    </div>
  )
}
