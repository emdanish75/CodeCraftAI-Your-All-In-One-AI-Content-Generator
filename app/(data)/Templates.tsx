export default [
    {
        name: 'Write Email',
        desc: 'This AI-powered tool helps you write professional emails with ease.',
        icon:'https://cdn-icons-png.flaticon.com/128/4185/4185808.png',
        category: 'Email',
        slug: 'email-write',
        aiPrompt: 'Compose a professional email based on the given topic, and format it in a rich text editor.',
        form: [
            {
                label: 'Email Topic',
                field: 'input',
                name: 'topic',
                required:true
            }
        ]
    },
    {
        name: 'Rewrite Your Email',
        desc: 'This AI-powered tool helps correct grammar and improve the professionalism of your emails.',
        icon:'https://cdn-icons-png.flaticon.com/128/6125/6125875.png',
        category: 'Email',
        slug: 'email-rewriter',
        aiPrompt: 'Rewrite the provided email, correcting grammar and enhancing professionalism. Output in rich text editor format.',
        form: [
            {
                label: 'Your Email',
                field: 'textarea',
                name: 'email-body',
                required:true
            }
        ]
    },
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog titles based on your blog information.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Provide 5 blog topic ideas in bullet points based on the given niche and outline, formatted in rich text editor.',
        slug:'generate-blog-title',
        form:[
            {
                label:'Blog Niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Blog Outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool for generating engaging blog content based on your specified topic and outline.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate blog content based on the provided topic and outline, formatted in a rich text editor.',
        form: [
            {
                label: 'Blog Topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Blog Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool for generating catchy and trending blog topic ideas based on your niche.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate the top 5 blog topic ideas in bullet points based on the provided niche, formatted in a rich text editor.',
        form: [
            {
                label: 'Blog Niche',
                field: 'input',
                name: 'niche',
                required:true
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool for generating SEO-optimized, high-ranking YouTube video titles.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Generate 5 SEO-optimized YouTube video titles in bullet points based on the provided keywords and outline, formatted in HTML tags.',
        form: [
            {
                label: 'YouTube Video Keywords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'YouTube Description Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'An AI tool for generating concise and engaging YouTube video descriptions with emojis.',
        category: 'YouTube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate a YouTube description with emojis, under 4-5 lines, based on the provided topic and outline, formatted in a rich text editor.',
        form: [
            {
                label: 'YouTube Video Topic/Title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'YouTube Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI tool for generating relevant and high-ranking YouTube tags.',
        category: 'YouTube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 YouTube tags in bullet points based on the provided title and outline, formatted in a rich text editor.',
        form: [
            {
                label: 'YouTube Video Title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'YouTube Video Outline (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'This tool rewrites articles or blog posts to make them plagiarism-free and bypass AI detectors.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the provided article to be plagiarism-free, formatted in a rich text editor.',
        form: [
            {
                label: 'Provide Your Article/Blog Post to Rewrite',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This tool refines your writing, improving readability and eliminating errors while suggesting better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Improve the provided text, eliminating grammar mistakes and enhancing professionalism, formatted in a rich text editor.',
        form: [
            {
                label: 'Text to Improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool for adding emojis to your text to make it more engaging and fun.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'Blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add emojis to the provided text, based on the context, and rewrite it in a rich text editor format.',
        form: [
            {
                label: 'Text to Add Emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Generate engaging Instagram posts based on provided keywords.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Blog',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram posts based on the provided keywords, formatted in a rich text editor.',
        form: [
            {
                label: 'Post Keywords',
                field: 'input',
                name: 'keywords',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'Generate relevant Instagram hashtags based on provided keywords.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'Blog',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hashtags based on the provided keywords, formatted in a rich text editor.',
        form: [
            {
                label: 'Hashtag Keywords',
                field: 'input',
                name: 'keywords',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'Generate new and trending Instagram post or reel ideas based on your niche.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'Instagram',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram post or reel ideas based on the provided niche, formatted in a rich text editor.',
        form: [
            {
                label: 'Niche Keywords',
                field: 'input',
                name: 'keywords',
                required:true
            }
        ]
    },
    {
        name: 'English Grammar Check',
        desc: 'AI tool to correct English grammar in your text.',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'English',
        slug: 'english-grammar-checker',
        aiPrompt: 'Rewrite the provided text, correcting grammar, and format it in a rich text editor.',
        form: [
            {
                label: 'Provide Text to Check',
                field: 'textarea',
                name: 'text',
                required:true
            }
        ]
    },
    {
        name: 'Write Code',
        desc: 'Generate programming code in any language with this AI-powered tool.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Generate programming code based on the provided description and programming language, and format the output in a rich text editor with code blocks.',
        form: [
            {
                label: 'Enter description of the code you want, along with the programming language',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            }
        ]
    },
    {
        name: 'Explain Code',
        desc: 'Get a detailed explanation of programming code in any language using this AI tool.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Explain the provided code line by line, formatted in a rich text editor with code blocks.',
        form: [
            {
                label: 'Enter the code you want to understand',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            }
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'Analyze code snippets and error messages to detect and fix bugs, offering detailed solutions and alternatives.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'Coding',
        slug: 'code-bug-detector',
        aiPrompt: 'Find bugs in the provided code and suggest solutions, formatted in a rich text editor with code blocks.',
        form: [
            {
                label: 'Enter the code you want to test for bugs',
                field: 'textarea',
                name: 'codeInput',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Create a standout tagline for your brand with this AI-powered tool.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketing',
        slug: 'tagline-generator',
        aiPrompt: 'Generate 5-10 catchy taglines for the provided product or brand based on the description, formatted in a rich text editor.',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What are you selling/marketing?',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'Create captivating and SEO-optimized e-commerce product descriptions to boost online sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketing',
        slug: 'product-description',
        aiPrompt: 'Generate a short, engaging, and SEO-optimized product description based on the provided product name and details, formatted in a rich text editor.',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    }
];