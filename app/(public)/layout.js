import NavigationBar from "@/components/NavigationBar";
import ThemeButton from "@/components/ThemeButton";

export default function PublicLayout({ children }) {
  return (
    <>
      <ThemeButton />
      <br />
      {children}
      <NavigationBar />
    </>
  );
}
