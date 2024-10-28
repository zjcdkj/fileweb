import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // 如果用户已登录且访问登录/注册页面，重定向到仪表盘
    if (
      req.nextauth.token &&
      (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register')
    ) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // 公开路由
        const publicPaths = ['/login', '/register'];
        if (publicPaths.includes(req.nextUrl.pathname)) {
          return true;
        }
        // 其他路由需要认证
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
