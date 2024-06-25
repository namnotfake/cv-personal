import { createI18nMiddleware } from "next-international/middleware";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   // 5 requests from the same IP in 10 seconds
//   limiter: Ratelimit.slidingWindow(10, "10 s"),
// });

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "vi"],
  defaultLocale: "vi",
  urlMappingStrategy: "redirect",
});

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? "125.212.225.71";
  // const apiToken = cookies().get("token");
  // // const { success } = await ratelimit.limit(ip);

  // // if (!success) {
  // //   return NextResponse.redirect(
  // //     new URL("https://re-marketing.click", request.url)
  // //   );
  // // }
  return I18nMiddleware(request);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
