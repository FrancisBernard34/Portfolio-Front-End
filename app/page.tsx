import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect("/en");
}