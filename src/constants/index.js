import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";


export const HERO_CONTENT = `Hi, I'm Sneha Dhawale, a passionate frontend developer transitioning from a 5-year career in the business operations, where I spent 2 years as a Senior Quality Analyst. My background in QA equips me with a unique attention to detail and a deep understanding of user behavior, enabling me to create seamless, intuitive, and bug-free web experiences. With a strong foundation in HTML, CSS, JavaScript, and React, I’m excited to bring my blend of technical skills and user-focused approach to building responsive, high-quality websites that meet the needs of both users and businesses.`;

export const ABOUT_TEXT = `With a passion for web development and a strong foundation in HTML, CSS, JavaScript, and React, I’m excited to bring my skills to the world of frontend development. My previous experience as a Senior Quality Analyst has given me a unique perspective on creating flawless user experiences, and now I’m eager to apply that knowledge to building dynamic and responsive websites. I thrive on solving complex challenges and delivering high-quality code, and I’m excited to continue growing as a frontend developer, contributing to innovative projects that make a real impact.`;

export const EXPERIENCES = [
  {
    year: "2019 - Present",
    role: "Senior Quality Analyst",
    company: "Hexaware Technologies",
    description: `Conducted quality assessments of customer interactions, ensuring adherence to company standards and enhancing user experience.
Developed a keen attention to detail and analytical skills, identifying areas for improvement in processes and communications.
Collaborated with cross-functional teams to implement feedback mechanisms that improved service quality and customer satisfaction.`,
technologies: [],  
},
  {
    year: "2023 - Present",
    role: "Frontend Development (Self-Directed Projects)",
    company: "Self-Driven – Remote",
    description: `Through self-directed projects, I gained hands-on experience in frontend development with a focus on HTML, CSS, JavaScript, and React. My QA background provides me with a unique perspective on user experience, enabling me to design and develop intuitive, responsive web applications. I've successfully deployed projects on platforms like Netlify and Vercel while continuously learning new technologies to enhance development efficiency.`,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Nodejs", "MongoDB"],
  },

];

export const PROJECTS = [
  {
    title: "Crypto Price Tracking Website",
    image: project1,
    link: "https://crypto-place-ten.vercel.app/",
    description:
      "This crypto price tracking website allows users to monitor real-time cryptocurrency prices and trends. Built using React, HTML, CSS, and JavaScript, the application fetches data from a reliable cryptocurrency API, displaying live updates on various digital currencies. Users can easily search for specific coins, view historical price charts, and get detailed information about each cryptocurrency.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Vercel "],
  },
  {
    title: "YouTube Frontend Clone",
    image: project2,
    link: "https://videofusion.netlify.app/",
    description:
      "This YouTube frontend clone is a React-based web application that simulates the functionalities of the YouTube platform, focusing on displaying videos, comments, and likes. Utilizing API integration, the project fetches a curated list of videos along with user comments and like counts, creating an engaging and interactive user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Netlify"],
  },
  {
    title: "Food Ordering Website",
    image: project3,
    link: "https://foodify-frontend-yo6w.onrender.com/",
    description:
      "A responsive and user-friendly food ordering platform that allows users to browse a variety of food items, customize their selections, and manage their cart by adding or removing items. The website features a seamless user experience with an intuitive interface, enabling users to place orders effortlessly. Built with a focus on performance and responsiveness, it ensures smooth navigation and efficient cart management for an optimal ordering experience..",
    technologies: ["React js", "MongoDB", "Node.js", "Express"],
  },

];

export const CONTACT = {
  address: "604 Lotus apartment Laxminagar Ghatkopar East, Mumbai: 400075  ",
  phoneNo: "+91 9833941098",
  email: "snehad925@gmail.com",
};
