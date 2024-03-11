import NavigationBar from "@/components/NavigationBar";

export default function PublicLayout({ children }) {
  return (
    <>
      {children}
      <NavigationBar />
    </>
  );
}
