import "./globals.css";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CategoryMenu } from "./components/CategoryMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)]">
        <Header />
        <SearchBar />
        {/* CategoryMenu is async server component */}
        <CategoryMenu />
        <main className="mx-auto max-w-7xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
