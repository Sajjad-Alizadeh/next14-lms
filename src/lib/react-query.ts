import {QueryCache, QueryClient} from "@tanstack/query-core";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // show notification
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