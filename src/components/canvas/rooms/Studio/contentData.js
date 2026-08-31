/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Sample content data - replace with real content later
const RAW_CONTENT_DATA = [
    // ============ YouTube / Tech Showcases ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'AI Resume Builder: Architecture & Integration',
        description: 'Deep dive into building an AI-powered resume builder with Next.js, React, and MongoDB, featuring real-time preview and PDF export.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://resume-craftss.netlify.app/',
        date: '2026-04-10',
        views: '1.5K',
        duration: '14:20',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: 'Full Stack MERN Authentication with JWT',
        description: 'Implementing secure user registration, token-based authentication, password hashing, and protected API routes in Node.js & Express.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/anuruddh123/news-alerts-frontend',
        date: '2026-03-15',
        views: '2.1K',
        duration: '18:45',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'Designing Scalable MongoDB Schemas with Mongoose',
        description: 'Best practices for database modeling, indexing, schema validations, and high-performance CRUD operations.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-02-28',
        views: '2.4K',
        duration: '22:10',
    },
    {
        id: 'yt-004',
        platform: 'youtube',
        title: 'E-Commerce App: Dynamic Cart & Checkout Workflow',
        description: 'Building full-stack product catalogs, cart state management, checkout functionality, and admin controls with React and Tailwind CSS.',
        thumbnail: null,
        url: 'https://shopvistaaa.netlify.app/',
        date: '2026-02-10',
        views: '1.8K',
        duration: '16:30',
    },
    {
        id: 'yt-005',
        platform: 'youtube',
        title: 'Real-Time News Alerts System with RESTful APIs',
        description: 'Building customizable alert platforms with REST APIs, user subscriptions, and MongoDB data persistence.',
        thumbnail: null,
        url: 'https://news-alertss.netlify.app/',
        date: '2026-01-20',
        views: '3.1K',
        duration: '20:15',
    },
    {
        id: 'yt-006',
        platform: 'youtube',
        title: 'React.js State Management & Modern Hooks',
        description: 'Effective component state management, custom hooks, context API, and Redux for scalable frontend apps.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-01-05',
        views: '2.8K',
        duration: '25:00',
    },
    {
        id: 'yt-007',
        platform: 'youtube',
        title: 'Responsive UI Engineering with Tailwind CSS & Bootstrap',
        description: 'Creating mobile-first responsive interfaces and reusable UI component libraries.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-12-18',
        views: '1.5K',
        duration: '19:22',
    },
    {
        id: 'yt-008',
        platform: 'youtube',
        title: 'Full Stack Development Trainee Experience at GUVI',
        description: 'Hands-on training in MERN stack development, API design, database architecture, and deployment workflows.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/anuruddh-tiwari-2842b232a/',
        date: '2025-11-30',
        views: '1.9K',
        duration: '15:45',
    },

    // ============ Technical Articles / Blog ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'Full Stack Development Course with AI Tools Certified! 🏆',
        description: 'Successfully completed the advanced Full Stack Development Course with AI Tools from GUVI IIT-M Pravartak in April 2026.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/anuruddh-tiwari-2842b232a/',
        date: '2026-04-05',
        readTime: '4 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'Architecting an AI-Powered Resume Builder',
        description: 'How Next.js, React components, and MongoDB combine to create instant real-time resume editing and PDF generation.',
        thumbnail: null,
        url: 'https://resume-craftss.netlify.app/',
        date: '2026-03-20',
        readTime: '6 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'RESTful API Best Practices in Node.js & Express',
        description: 'Structuring clean controllers, services, middleware error handling, and secure JWT authentication headers.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-02-15',
        readTime: '5 min',
    },
    {
        id: 'blog-004',
        platform: 'blog',
        title: 'B.Tech Computer Science & Engineering Journey (AKTU)',
        description: 'Four-year academic foundation at Dr. A.P.J. Abdul Kalam Technical University, Lucknow (2022-2026, CGPA: 8.1).',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/anuruddh-tiwari-2842b232a/',
        date: '2026-01-25',
        readTime: '7 min',
    },
    {
        id: 'blog-005',
        platform: 'blog',
        title: 'Basic Java Programming Certification by GUVI & HCL',
        description: 'Strengthening core Object-Oriented Programming (OOP) fundamentals, problem-solving, and data structures.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/anuruddh-tiwari-2842b232a/',
        date: '2025-09-20',
        readTime: '4 min',
    },
    {
        id: 'blog-006',
        platform: 'blog',
        title: 'Optimizing MERN Applications for Production',
        description: 'Strategies for database indexing in MongoDB, bundle optimization in React, and hosting on Netlify & Render.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-11-10',
        readTime: '8 min',
    },
    {
        id: 'blog-007',
        platform: 'blog',
        title: 'Frontend State Management: Redux vs Context API',
        description: 'Comparing global state solutions in React applications for predictable data flows and responsive UI.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-10-15',
        readTime: '6 min',
    },
    {
        id: 'blog-008',
        platform: 'blog',
        title: 'Effective API Testing with Postman & Automated Scripts',
        description: 'Streamlining endpoint verification, testing HTTP status codes, and environment variables.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-09-10',
        readTime: '5 min',
    },

    // ============ Quick Updates / Social ============
    {
        id: 'tt-001',
        platform: 'tiktok',
        title: 'Connect on LinkedIn ✨',
        description: 'Connect with Anuruddh Tiwari for full-stack MERN opportunities, collaborations, and tech discussions.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/anuruddh-tiwari-2842b232a/',
        date: '2026-04-12',
        views: '15.2K',
        likes: '1.8K',
    },
    {
        id: 'tt-002',
        platform: 'tiktok',
        title: 'Explore GitHub Repositories 💻',
        description: 'Check out open source projects, full-stack repos, and responsive frontend code.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-04-01',
        views: '8.5K',
        likes: '950',
    },
    {
        id: 'tt-003',
        platform: 'tiktok',
        title: 'Live Demo: AI Resume Builder 📄',
        description: 'Create and export professional resumes in minutes with AI assistance.',
        thumbnail: null,
        url: 'https://resume-craftss.netlify.app/',
        date: '2026-03-25',
        views: '22.1K',
        likes: '3.4K',
    },
    {
        id: 'tt-004',
        platform: 'tiktok',
        title: 'Live Demo: News Alerts System 🔔',
        description: 'Personalized real-time news alert platform with RESTful APIs.',
        thumbnail: null,
        url: 'https://news-alertss.netlify.app/',
        date: '2026-03-10',
        views: '12.3K',
        likes: '1.4K',
    },
    {
        id: 'tt-005',
        platform: 'tiktok',
        title: 'Live Demo: E-Commerce Store 🛒',
        description: 'Full-stack store with product listings, cart management, and admin controls.',
        thumbnail: null,
        url: 'https://shopvistaaa.netlify.app/',
        date: '2026-02-22',
        views: '19.5K',
        likes: '2.8K',
    },
    {
        id: 'tt-006',
        platform: 'tiktok',
        title: 'Building Reusable React Components ⚛️',
        description: 'Clean, modular component design with props and TypeScript/JavaScript.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-02-05',
        views: '18.7K',
        likes: '2.1K',
    },
    {
        id: 'tt-007',
        platform: 'tiktok',
        title: 'JWT Authentication Workflow 🔐',
        description: 'Token generation, secret keys, and protecting backend routes.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-01-18',
        views: '33.4K',
        likes: '4.2K',
    },
    {
        id: 'tt-008',
        platform: 'tiktok',
        title: 'MongoDB CRUD Operations 🍃',
        description: 'Efficient query patterns, updates, and schema validation with Mongoose.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2026-01-02',
        views: '28.9K',
        likes: '3.6K',
    },
    {
        id: 'tt-009',
        platform: 'tiktok',
        title: 'Tailwind CSS Utility Styling 🎨',
        description: 'Crafting responsive layouts without leaving your JSX markup.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-12-20',
        views: '19.3K',
        likes: '2.4K',
    },
    {
        id: 'tt-010',
        platform: 'tiktok',
        title: 'Postman API Debugging 🚀',
        description: 'Testing requests, inspecting JSON payloads, and validating headers.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-12-08',
        views: '24.2K',
        likes: '3.1K',
    },
    {
        id: 'tt-011',
        platform: 'tiktok',
        title: 'Git Version Control & Branching 🌿',
        description: 'Managing feature branches, commit hygiene, and GitHub workflows.',
        thumbnail: null,
        url: 'https://github.com/anuruddh123',
        date: '2025-11-22',
        views: '25.6K',
        likes: '3.0K',
    },
    {
        id: 'tt-012',
        platform: 'tiktok',
        title: 'Full Stack Trainee at GUVI Kanpur 🎓',
        description: 'Hands-on project development and MERN stack mastery.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/anuruddh-tiwari-2842b232a/',
        date: '2025-11-05',
        views: '31.8K',
        likes: '4.0K',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
