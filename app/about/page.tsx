import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
	title: 'About Us',
	description: 'About NextSpace',
};

export default function Blog() {
	return (
		<div>
			<h1>About us</h1>
			<p>Just another social media that wants to bring people together!</p>
		</div>
	);
}