import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from './ProfileForm';
import { redirect } from 'next/navigation';
import { SignOutButton } from "@/components/SignOutButton";
import styles from './page.module.css';
import { authOptions } from "../api/auth/[...nextauth]/route"


export default async function Dashboard() {
	const session = await getServerSession(authOptions);
	
	if (!session) {
		redirect('/api/auth/signin');
	}
	
	const currentUserEmail = session?.user?.email!;
	const user = await prisma.user.findUnique({
		where: {
			email: currentUserEmail,
		},
	});
	
	return (
		<div className={styles.main}>
			<h1>Dashboard</h1>
			<SignOutButton />
			<ProfileForm user={user} />
		</div>
	);
}