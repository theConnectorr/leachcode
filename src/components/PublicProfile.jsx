import { useEffect, useState, useRef } from "react";

export default function PublicProfile({ id, className, username }) {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const go = async (username) => {
			const response = await fetch(
				`https://graphql-proxy-server.vercel.app/api/user/public_profile?username=${username}`
			);
			const json = await response.json();
			console.log(json);
			setProfile(json.data.matchedUser);
		};

		go(username);
	}, []);

	return (
		<div id={id} className={className}>
			{profile && (
				<div style={{ display: "flex" }}>
					<div>
						<img
							style={{ borderRadius: "10px" }}
							width={150}
							height={150}
							src={profile.profile.userAvatar}
						/>
						<h3 style={{ textAlign: "center", margin: "3px auto" }}>{profile.username}</h3>
						<p style={{ textAlign: "center", margin: "5px auto" }}>school: HCMUS</p>
					</div>
				</div>
			)}
		</div>
	);
}
