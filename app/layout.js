import "./globals.css";

export const metadata = {
  title: "The Hunter's Bar",
  description: "Good Cocktails And A Hunting Environment Are Waiting You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="cocktail.png" />
      <body>{children}</body>
    </html>
  );
}
