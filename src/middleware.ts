export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/realstate/admin/","/admin/","/client/","/project/"],
};