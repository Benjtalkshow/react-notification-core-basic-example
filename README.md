

# React-notification-core-basic-example

This project provides a simple and interactive example of how to integrate and use the [`react-notification-core`](https://www.npmjs.com/package/react-notification-core) library in a React (Next.js) application. It demonstrates fetching, displaying, managing, and interacting with notifications using mock APIs.

## Features

* 🛎️ Display notifications in a dropdown UI
* 🔁 Refresh notifications
* ✅ Mark notifications as read (individually or all at once)
* 🗑️ Delete notifications
* ⏱️ Simulated loading, delay, and error handling
* 📦 Built with TailwindCSS and Lucide Icons for a clean UI

## Project Structure

### 1. `app/page.tsx`

Sets up the `NotificationProvider` from `react-notification-core` with mock API handlers:

```tsx
<NotificationProvider
  fetchNotifications={mockFetchNotifications}
  onMarkAsRead={mockMarkAsRead}
  onMarkAllAsRead={mockMarkAllAsRead}
  onDeleteNotification={mockDeleteNotification}
  fetchOptions={{
    retryCount: 2,
    retryDelay: 1000,
    timeout: 5000,
  }}
>
  <NotificationDemo />
</NotificationProvider>
```

### 2. `NotificationDemo.tsx`

Provides the UI for viewing and managing notifications via:

* `useNotifications()` hook from `react-notification-core`
* A bell icon dropdown interface
* Action buttons for:

  * Marking as read
  * Deleting
  * Refreshing

### 3. `mockApi.ts`

Implements mock functions simulating backend notification APIs:

* `mockFetchNotifications()`
* `mockMarkAsRead(id)`
* `mockMarkAllAsRead()`
* `mockDeleteNotification(id)`

Includes a sample set of notifications with varied types and states.

## Installation & Running

1. **Install dependencies**

   ```bash
   npm install react-notification-core lucide-react
   ```

2. **Run the app**

   ```bash
   npm run dev
   ```

3. **Visit** `http://localhost:3000` to test the demo.

## Screenshots

> ![Demo Screenshot]()
> *Interactive notification dropdown with actions.*

## Customization

You can replace the mock API functions with real API calls to integrate into your backend. The UI components can be styled further using Tailwind or replaced with your preferred UI library.

