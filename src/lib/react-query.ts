import {QueryCache, QueryClient} from "react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // show notification
    }
  }),

  defaultOptions: {
    queries: {
      retry: false,
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60,
    }
  }

})