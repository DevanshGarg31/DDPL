import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitterx.svg';
import youtube from '../assets/icons/youtube.svg';

import strip1 from '../assets/images/empanelments_hdfcbank.png';
import strip2 from '../assets/images/empanelments_axisbank.png';
import strip3 from '../assets/images/awards_nagarnigam.png';
import strip4 from '../assets/images/awards_jda.png';

export const navigations = [
    {
        id: '1',
        label: 'Who We Are',
        path: '#',
        sub: [
            {
                id: '1',
                displayName: "Firm Profile",
                link: "who-we-are/#firm-profile"
            },
            {
                id: '2',
                displayName: "Our Belief",
                link: "who-we-are/#our-belief"
            },
            {
                id: '3',
                displayName: "Meet Our Leadership",
                link: "who-we-are/#meet-our-leadership"
            },
            {
                id: '4',
                displayName: "Awards & Empanelments",
                link: "who-we-are/#awards-empanelments"
            }
        ]
    },
    {
        id: '2',
        label: 'Expertise',
        path: '#',
        sub: [
            {
                id: '1',
                displayName: "Developer",
                link: "developer"
            },
            {
                id: '2',
                displayName: "Construction",
                link: "construction"
            },
            {
                id: '3',
                displayName: "Engineering",
                link: "engineering"
            },
            {
                id: '4',
                displayName: "Consultancy",
                link: "consultancy"
            }
        ]
    },
    {
        id: '3',
        label: 'Projects',
        path: ''
    },
    {
        id: '4',
        label: 'Reaseach & Insights',
        path: '#',
        sub: [
            {
                id: '1',
                displayName: "News",
                link: "reseach-insights/#news"
            },
            {
                id: '2',
                displayName: "In Media",
                link: "reseach-insights/#media"
            },
            {
                id: '3',
                displayName: "Blog",
                link: "reseach-insights/#blog"
            }
        ]
    },
];

export const navigations2 = [
    {
        id: '5',
        label: "Testimonials",
        path: "client-testimonials"
    },
    {
        id: '6',
        label: "Join Our Team",
        path: "careers"
    },
    {
        id: '7',
        label: "Contact Us",
        path: "contact-us"
    }
];

export const socials = [
    { id: '1', svg: linkedin, label: 'linkedin', path: "https://www.linkedin.com/company/devpratik-developers/about/" },
    { id: '2', svg: facebook, label: 'facebook', path: "https://www.facebook.com/devpratikdevelopers" },
    { id: '3', svg: instagram, label: 'instagram', path: "https://www.instagram.com/devpratikdevelopers/" },
    { id: '4', svg: twitter, label: 'twitter', path: "https://twitter.com/ddpl_india" },
    { id: '5', svg: youtube, label: 'youtube', path: "https://www.youtube.com/@devpratikdevelopers" }
];

export const footerNav1 = [
    {
        id: '1',
        displayName: "Contact Us",
        path: ''
    },
    {
        id: '2',
        displayName: "Guiding Principles",
        path: ''
    },
    {
        id: '3',
        displayName: "Sustainability",
        path: ''
    },
    {
        id: '4',
        displayName: "Diversity",
        path: ''
    }
]

export const footerNav2 = [
    {
        id: '1',
        displayName: "Privacy Policy",
        path: ''
    },
    {
        id: '2',
        displayName: "Terms of Service",
        path: ''
    },
]

export const cards = [
    {
        id: '1',
        path: "expertise/construction",
        buttonTxt: "Know More",
        desc: "Hi! The following is our **Construction Service**. If you want to learn more about this service, click on the **Know More Button** below. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar."
    },
    {
        id: '2',
        path: "expertise/construction",
        buttonTxt: "Know More",
        desc: "Hi! The following is our **Construction Service**. If you want to learn more about this service, click on the **Know More Button** below. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar."
    },
    {
        id: '3',
        path: "expertise/construction",
        buttonTxt: "Know More",
        desc: "Hi! The following is our **Construction Service**. If you want to learn more about this service, click on the **Know More Button** below. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar."
    },
    {
        id: '4',
        path: "expertise/construction",
        buttonTxt: "Know More",
        desc: "Hi! The following is our **Construction Service**. If you want to learn more about this service, click on the **Know More Button** below. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar."
    },
    {
        id: '5',
        path: "expertise/construction",
        buttonTxt: "Know More",
        desc: "Hi! The following is our **Construction Service**. If you want to learn more about this service, click on the **Know More Button** below. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar."
    }
]

export const stripImgs = [
    {
        id: '1',
        src: strip1,
        alt: "HDFC Bank",
    },
    {
        id: '2',
        src: strip2,
        alt: 'Axis Bank'
    },
    {
        id: '3',
        src: strip3,
        alt: 'Nagar Nigam Award'
    },
    {
        id: '4',
        src: strip4,
        alt: 'JDA Award'
    },
    {
        id: '5',
        src: strip1,
        alt: 'HDFC Bank 2'
    },
    {
        id: '6',
        src: strip2,
        alt: 'Axis Bank 2'
    },
    {
        id: '7',
        src: strip3,
        alt: 'Nagar Nigam Award 2'
    },
    {
        id: '8',
        src: strip4,
        alt: 'JDA Award 2'
    },

    // Add more image URLs as needed
];

export const numbers = [
    {
        id: '1',
        icon: "fa fa-user",
        title: "Clients Served",
        number: "464"
    },
    {
        id: '2',
        icon: "fa fa-building",
        title: "Projects Done",
        number: "1024"
    },
    {
        id: '3',
        icon: "fa fa-building",
        title: "Years in Industry",
        number: "13"
    },
    {
        id: '4',
        icon: "fa fa-list-ol",
        title: "Rank",
        number: "1"
    }
]