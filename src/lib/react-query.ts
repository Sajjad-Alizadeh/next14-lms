import {MutationCache, QueryCache, QueryClient} from "@tanstack/query-core";
import {Problem} from "@/types/http-errors.interface";
import {Notification} from "@/types/notification.interface";
import {showNotification} from "@/stores/notification.store";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      showNotifications(error as Problem)
    }
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showNotifications(error as Problem)
    }
  }),

  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: false,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60,
    }
  }

})

const showNotifications = (problem: Problem) => {
  const notifications: Omit<Notification, 'id'>[] = []

  if (problem?.errors) {
    Object.entries(problem.errors).forEach(([_, value]) => {
      value.forEach(errorMessage => {
        notifications.push({
          message: errorMessage,
          type: 'error'
        })
      })
    })
  } else if (problem?.detail) {
    notifications.push({
      message: problem.detail,
      type: 'error'
    })
  }

  showNotification(notifications)
}