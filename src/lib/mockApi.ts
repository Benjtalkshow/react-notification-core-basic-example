import type { Notification } from "react-notification-core"

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Welcome to the app",
    message: "Thanks for trying out our notification system!",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    read: false,
    type: "info",
  },
  {
    id: "2",
    title: "New feature available",
    message: "Check out our new dashboard features.",
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    read: true,
    type: "info",
  },
  {
    id: "3",
    title: "Action required",
    message: "Please verify your email address.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
    type: "warning",
  },
  {
    id: "4",
    title: "Payment successful",
    message: "Your subscription has been renewed.",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    read: true,
    type: "success",
  },
  {
    id: "5",
    title: "Login attempt",
    message: "A new login was detected from an unknown device.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: false,
    type: "error",
  },
]

let notifications = [...mockNotifications]

// Mock API functions
export async function mockFetchNotifications(): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Simulate occasional errors (1 in 10 chance)
  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch notifications")
  }

  return [...notifications]
}

export async function mockMarkAsRead(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  notifications = notifications.map((notification) =>
    notification.id === id ? { ...notification, read: true } : notification,
  )
}

export async function mockMarkAllAsRead(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  notifications = notifications.map((notification) => ({ ...notification, read: true }))
}

export async function mockDeleteNotification(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  notifications = notifications.filter((notification) => notification.id !== id)
}
