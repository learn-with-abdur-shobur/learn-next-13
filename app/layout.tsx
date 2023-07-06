export const metadata = {
	title: 'Learn Next js',
	description: 'by abdur shobur',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
