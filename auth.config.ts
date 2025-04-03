import {NextAuthConfig} from "next-auth";

export const authConfig = {
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async authorized({auth, request}) {
      const {nextUrl} = request

      const isAuthenticated = !!auth?.user

      const authRoutes = ['/signin', '/verify']
      const protectedPaths = ['student'] // Note: don't use '/' before path names
      const isAuthRoute = authRoutes.includes(nextUrl.pathname)
      const firstPath = nextUrl.pathname.split('/')[1]
      const isProtectedRoute = protectedPaths.includes(firstPath)

      if (isAuthenticated && isAuthRoute) {
        return Response.redirect(new URL('/student/courses', nextUrl))
      }

      if (!isAuthenticated && isProtectedRoute) {
        return Response.redirect(new URL('/signin', nextUrl))
      }

      return true
    }
  },
  providers: []
} satisfies NextAuthConfig