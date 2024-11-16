 import { ArrowBigRight, Contact, Facebook, Home, Instagram, Linkedin } from "lucide-react"
 export const workData = [
    {
        id:1,
        img :"/projects/pro-1.png",
        icons:["/mongo.svg", "/next.png", "/tailwind.png"],
        title:"Home Service's",
        description: "I developed a versatile home services website aimed at simplifying the process of finding and booking various home maintenance and improvement services. This platform allows users to easily browse a wide array of services, complete with detailed descriptions and customer reviews."
    },
    {
        id:2,
        img :"/projects/pro-2.png",
        icons:[],
        title:"Real-Estate",
        description: "I developed a dynamic real estate website that revolutionizes the property viewing experience. The platform allows users to effortlessly browse available listings, featuring high-quality images and detailed descriptions. With an integrated room booking system, users can easily select their preferred time slots for property viewings, ensuring a seamless reservation process.."
    },
    {
        id:3,
        img :"/projects/pro-3.png",
        icons:[],
        title:"Course's Sell",
        description: "I developed an engaging online courses website designed to facilitate learning and skill development across various subjects. This platform provides users with the ability to explore a diverse range of courses, each accompanied by detailed descriptions, objectives, and instructor profiles."
    },
    {
        id:4,
        img :"/projects/pro-4.png",
        icons:[],
        title:"Dentist",
        description: "I created a modern dental website designed to enhance patient interaction and simplify the appointment process. This platform allows users to effortlessly explore a wide range of dental services, complete with thorough descriptions and insights into each treatment."
    }
] 

export const sidebarData = [
    {id:1, title:"Home", path:"/", icon:Home},
    {id:2, title:"About", path:"/about", icon:ArrowBigRight},
    {id:3, title:"Contact", path:"/contact", icon:Contact},
  ];
  
  export const sideNavData = [
    {id:1, name:"Facebook", path:"#", Icon:Facebook},
    {id:2, name:"Instagram", path:"https://www.instagram.com/arti__web", Icon:Instagram},
    {id:3, name:"Linkedin", path:"#", Icon:Linkedin}
  ];

