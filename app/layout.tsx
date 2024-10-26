import { montserrat } from "@/app/ui/fonts";
import "./globals.css";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased`}>{children}</body>
		</html>
	);
}
