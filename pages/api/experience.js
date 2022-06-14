export default function handler(req, res) {
	res.status(200).json({
		jobs: [
			{ employer: "Texas A&M Foundation", title: "IT Systems & Database Analyst", date:"July 2018 - Present" },
			{ employer: "Texas A&M University", title: "Student Network Technician", date:"May 2014 - June 2018"  }
		],
	});
}
