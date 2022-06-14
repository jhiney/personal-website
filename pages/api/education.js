export default function handler(req, res) {
	res.status(200).json({
		education: [
			{
				school: "Texas A&M University",
				degree: "Bachelor of Science",
				major: "Political Science",
				emphasis: "Data Analysis, Political Econometrics",
				graduation: "May 2018"
			}
		]
	});
}
