// Add the portfolio objects to the data array
const data = [
	{
		name: "Rainy Days",
		description:
			"A e-commerce website for a fictional company, selling rain jackets.",
		image: "https://i.postimg.cc/1zt8S31b/Home-Rainy-Days.png",
		githubRepo: "https://github.com/ttowntom/noroff-fed-cms",
		liveSite: "https://rainydayscms-thr.netlify.app/",
	},
	{
		name: "Community Science Museum",
		description: "A HTML & CSS website for a fictional museum for kids.",
		image: "https://i.postimg.cc/wBJS7hzN/Home-Community-Science-Museum.png)",
		githubRepo: "https://github.com/ttowntom/noroff-fed-sp1",
		liveSite: "https://csm-thr.netlify.app/",
	},
	{
		name: "CodeJourney",
		description:
			"A blog for a fictional character writing about tech and code.",
		image: "https://i.postimg.cc/J40Jmx3p/Home-Code-Journey-io.png)",
		githubRepo:
			"https://github.com/Noroff-FEU-Assignments/project-exam-1-ttowntom",
		liveSite: "https://pe1-thr.netlify.app/",
	},
];

// Grab elements from DOM
const portfolioWrapper = document.querySelector("#portfolio-items");

// Generate and render the portfolio items
data.forEach((item) => {
	// Create a new portfolio item
	const portfolioItem = document.createElement("article");
	portfolioItem.classList.add("portfolio-item");

	// Create the image element
	const imageLink = document.createElement("a");
	imageLink.href = item.liveSite;
	const image = document.createElement("img");
	image.src = item.image;
	image.alt = "A screenshot of the" + item.name + "website";
	imageLink.appendChild(image);

	// Create text wrapper
	const textWrapper = document.createElement("div");

	// Create the title element
	const title = document.createElement("h3");
	title.textContent = item.name;

	// Create the description element
	const description = document.createElement("p");
	description.textContent = item.description;

	// Create link list
	const linkList = document.createElement("ul");

	// Create the GitHub link
	const listGh = document.createElement("li");
	const linkGh = document.createElement("a");
	linkGh.href = item.githubRepo;
	linkGh.textContent = "View GitHub repo";
	listGh.appendChild(linkGh);

	// Create the live link
	const listLs = document.createElement("li");
	const linkLs = document.createElement("a");
	linkLs.href = item.liveSite;
	linkLs.textContent = "View Live Site";
	listLs.appendChild(linkLs);

	// Append the links to the link list
	linkList.appendChild(listGh);
	linkList.appendChild(listLs);

	// Append text to the text wrapper
	textWrapper.appendChild(title);
	textWrapper.appendChild(description);
	textWrapper.appendChild(linkList);

	// Append the elements to the portfolio item
	portfolioItem.appendChild(imageLink);
	portfolioItem.appendChild(textWrapper);

	// Append the portfolio item to the portfolio wrapper
	portfolioWrapper.appendChild(portfolioItem);
});
