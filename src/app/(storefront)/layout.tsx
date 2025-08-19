import { Footer, Header } from "@/modules/layout/components";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
