import facebook from '@/app/assets/icons/facebook.svg';
import instagram from '@/app/assets/icons/instagram.svg';
import linkedin from '@/app/assets/icons/linkedin.svg';
import twitter from '@/app/assets/icons/twitterx.svg';
import youtube from '@/app/assets/icons/youtube.svg';

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
        id: '1',
        label: "Testimonials",
        path: "client-testimonials"
    },
    {
        id: '2',
        label: "Join Our Team",
        path: "careers"
    },
    {
        id: '3',
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