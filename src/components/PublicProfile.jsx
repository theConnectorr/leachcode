import { useEffect, useState } from "react";
import GithubLogo from "/assets/github-mark/github-mark-white.svg";
import LinkedInLogo from "/assets/linkedin.svg";
import "./styles/PublicProfile.css"

export default function PublicProfile({ id, className, username }) {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const go = async (username) => {
			const response = await fetch(
				`https://graphql-proxy-server.vercel.app/api/user/public_profile?username=${username}`
			);
			const json = await response.json();
			setProfile(json.data.matchedUser);
			console.log(json.data.matchedUser);
		};

		username && go(username);
	}, [username]);

	return (
		<div id={id} className={className} key={username}>
			{profile && (
				<div id="profile-wrapper">
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div style={{ width: "50%" }}>
							<img style={{ borderRadius: "10px" }} width={150} height={150} src={profile.profile.userAvatar} />
							<h2 style={{ textAlign: "center", margin: 0 }}>{profile.profile.realName}</h2>
							<h5 id="username">{profile.username}</h5>
							<ul id="links">
								<li>
									<img src={GithubLogo} height={25} width={25} />
									<a target="_blank" href={profile.githubUrl}>
										{profile.githubUrl.split("/").at(-1)}
									</a>
								</li>
								<li>
									<img src={LinkedInLogo} height={25} width={25} />
									<a target="_blank" href="https://www.linkedin.com/in/kh%C3%B4i-l%C3%AA-b731741b4/">
										Khôi Lê
									</a>
								</li>
							</ul>
						</div>
						<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50%" }}>
							<div>
								<h3 style={{ textAlign: "left" }}>Ranking: {profile.profile.ranking}</h3>
								<h3 style={{ textAlign: "left" }}>Country: {profile.profile.countryName}</h3>
								<h3 style={{ textAlign: "left" }}>School: {profile.profile.school}</h3>
							</div>
							<div>
								<h3 style={{ textAlign: "left" }}>Skill:</h3>
								{profile.profile.skillTags.map((skill) =>
									<h4 style={{ textAlign: "center" }} key={skill}>{skill}</h4>
								)}
							</div>
						</div>
					</div>
					<em style={{ textAlign: "center" }}>{profile.profile.aboutMe}</em>
				</div>
			)}
		</div>
	);
}
