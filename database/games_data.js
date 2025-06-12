const ranPosGenerator = () => Math.round(Math.random() * 70);
const randomPos = () => ({ top: ranPosGenerator(), left: ranPosGenerator() });
const games = {
    game1: {
        title: "The Cryptographer's Challenge",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "Cryptography",
        description: "Breach the security system of a cryptography professor who loves simple ciphers.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=320&auto=format",
        energyCost: 10,
        maxAttempts: 10,
        length: 2,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Sarah Chen, Cryptography Professor
System: Personal Research Database
Background: Dr. Chen is known for using simple substitution ciphers to protect her research notes.
Your mission is to decode her basic encryption methods to access her research database.
Each phase will test your ability to recognize simple patterns in her encoded messages.`,
        phases: [
            {
                description: "Decode this simple substitution cipher (A=1, B=2, etc.)",
                messages: [
                    {
                        id: 1,
                        text: "8-5-12-12-15",
                        hash: 1,
                        position: randomPos()
                    },
                    {
                        id: 2,
                        text: "23-15-18-12-4",
                        hash: 2,
                        position: randomPos()
                    }
                ],
                password: "hello-world-code",
                explanation: "Simple number-to-letter substitution: 8=H, 5=E, 12=L, 15=O, 23=W, 18=R, 4=D, 3=C. Arranged by the numbers in parentheses: 1) hello, 2) world, 3) code",
            },
            {
                description: "Decode this reverse alphabet cipher (A=Z, B=Y, etc.) and arrange by the numbers in parentheses",
                messages: [
                    {
                        id: 1,
                        text: "Svool",
                        hash: 0,
                        position: randomPos()
                    },
                    {
                        id: 2,
                        text: "Dliow",
                        hash: 0,
                        position: randomPos()
                    },
                    {
                        id: 3,
                        text: "Xrks",
                        hash: 0,
                        position: randomPos()
                    }
                ],
                password: "world-hello-cat",
                explanation: "Reverse alphabet: S=H, V=E, O=L, L=O, D=W, I=R, W=D, X=C, K=T. Arranged by the numbers in parentheses: 1) world, 2) hello, 3) cat",
            }
        ],
        finalPassword: "Cipher"
    },
    game2: {
        title: "Algorithm Architect",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "Computer Science",
        description: "Breach the system of a computer science professor who organizes everything by complexity.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=320&auto=format",
        energyCost: 15,
        length: 3,
        maxAttempts: 15,
        difficulty: "Medium",
        detailedDescription: `
Target: Prof. James Wilson, Computer Science Department Head
System: Algorithm Research Database
Background: Prof. Wilson is obsessed with organizing everything by computational complexity.
Your mission is to understand his organization system to access his research database.
Each phase will test your understanding of basic algorithm concepts.`,
        phases: [
            {
                description: "Arrange these basic operations by speed (fastest first)",
                messages: [
                    { id: 1, text: "Adding two numbers", hash: 24, position: randomPos() },
                    { id: 2, text: "Searching a sorted list", hash: 301, position: randomPos() },
                    { id: 3, text: "Sorting a list", hash: 4, position: randomPos() }
                ],
                password: "add-search-sort",
                explanation: "Basic operations ordered by speed: 1) Adding numbers - instant, 2) Searching sorted list - log(n), 3) Sorting list - n log(n)",
            },
            {
                description: "Order these data structures by memory usage (least first)",
                messages: [
                    { id: 1, text: "Array", hash: 45, position: randomPos() },
                    { id: 2, text: "Linked List", hash: 120, position: randomPos() },
                    { id: 3, text: "Binary Tree", hash: 87, position: randomPos() }
                ],
                password: "array-list-tree",
                explanation: "Data structures ordered by memory: 1) Array - fixed size, 2) Linked List - dynamic size, 3) Binary Tree - complex structure",
            },
            {
                description: "Arrange these programming concepts by complexity (simplest first)",
                messages: [
                    { id: 1, text: "Variables", hash: 16, position: randomPos() },
                    { id: 2, text: "Functions", hash: 165, position: randomPos() },
                    { id: 3, text: "Classes", hash: 19, position: randomPos() }
                ],
                password: "variables-functions-classes",
                explanation: "Programming concepts ordered by complexity: 1) Variables - basic storage, 2) Functions - reusable code, 3) Classes - object-oriented programming",
            }
        ],
        finalPassword: "Complexity"
    },
    game3: {
        title: "Quantum Enigma",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "Physics",
        description: "Breach the quantum computing lab of a physics professor.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=320&auto=format",
        energyCost: 12,
        length: 3,
        maxAttempts: 12,
        difficulty: "Medium",
        detailedDescription: `
Target: Dr. Maria Rodriguez, Quantum Physics Researcher
System: Quantum Computing Lab Database
Background: Dr. Rodriguez uses basic quantum concepts to organize her research.
Your mission is to understand her organization system to access the lab's database.
Each phase will test your understanding of fundamental quantum concepts.`,
        phases: [
            {
                description: "Arrange these particles by size (smallest first)",
                messages: [
                    { id: 1, text: "Electron", hash: 842, position: randomPos() },
                    { id: 2, text: "Proton", hash: 193, position: randomPos() },
                    { id: 3, text: "Atom", hash: 557, position: randomPos() }
                ],
                password: "electron-proton-atom",
                explanation: "Particles ordered by size: 1) Electron - smallest, 2) Proton - medium, 3) Atom - largest",
            },
            {
                description: "Order these quantum states by energy (lowest first)",
                messages: [
                    { id: 1, text: "Ground state", hash: 928, position: randomPos() },
                    { id: 2, text: "Excited state", hash: 476, position: randomPos() },
                    { id: 3, text: "Ionized state", hash: 315, position: randomPos() }
                ],
                password: "ground-excited-ionized",
                explanation: "Quantum states ordered by energy: 1) Ground state - lowest energy, 2) Excited state - medium energy, 3) Ionized state - highest energy",
            },
            {
                description: "Arrange these quantum properties by discovery date (earliest first)",
                messages: [
                    { id: 1, text: "Wave nature", hash: 203, position: randomPos() },
                    { id: 2, text: "Particle nature", hash: 741, position: randomPos() },
                    { id: 3, text: "Entanglement", hash: 588, position: randomPos() }
                ],
                password: "wave-particle-entanglement",
                explanation: "Quantum properties ordered by discovery: 1) Wave nature - 1800s, 2) Particle nature - 1900s, 3) Entanglement - 1930s",
            }
        ],
        finalPassword: "Quantum"
    },
    game4: {
        title: "Neural Nexus",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "AI",
        description: "Breach the AI research lab of a machine learning expert.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=320&auto=format",
        energyCost: 8,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Alex Thompson, AI Research Director
System: Machine Learning Lab Database
Background: Dr. Thompson uses simple AI concepts to organize his research.
Your mission is to understand his organization system to access the lab's database.
Each phase will test your understanding of basic AI concepts.`,
        phases: [
            {
                description: "Arrange these AI concepts by complexity (simplest first)",
                messages: [
                    { id: 1, text: "If-Then rules", hash: 412, position: randomPos() },
                    { id: 2, text: "Decision trees", hash: 879, position: randomPos() },
                    { id: 3, text: "Neural networks", hash: 253, position: randomPos() }
                ],
                password: "rules-trees-networks",
                explanation: "AI concepts ordered by complexity: 1) If-Then rules - basic logic, 2) Decision trees - branching logic, 3) Neural networks - complex learning",
            },
            {
                description: "Order these AI applications by development year (earliest first)",
                messages: [
                    { id: 1, text: "Chess programs", hash: 781, position: randomPos() },
                    { id: 2, text: "Face recognition", hash: 346, position: randomPos() },
                    { id: 3, text: "ChatGPT", hash: 925, position: randomPos() }
                ],
                password: "chess-face-chatgpt",
                explanation: "AI applications ordered by development: 1) Chess programs - 1950s, 2) Face recognition - 1990s, 3) ChatGPT - 2020s",
            }
        ],
        finalPassword: "Learning"
    },
    game5: {
        title: "Eco Quest",
        timeLimit: 120,
        isDaily: true,
        timed: true,
        theme: "Environment",
        description: "Breach the environmental research center of a sustainability expert.",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=320&auto=format",
        energyCost: 10,
        length: 2,
        maxAttempts: 12,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Emma Green, Environmental Science Director
System: Sustainability Research Database
Background: Dr. Green organizes her research by environmental impact.
Your mission is to understand her organization system to access the research database.
Each phase will test your understanding of basic environmental concepts.`,
        phases: [
            {
                description: "Arrange these energy sources by efficiency (highest first)",
                messages: [
                    { id: 1, text: "Solar", hash: 729, position: randomPos() },
                    { id: 2, text: "Wind", hash: 386, position: randomPos() },
                    { id: 3, text: "Coal", hash: 154, position: randomPos() }
                ],
                password: "solar-wind-coal",
                explanation: "Energy sources ordered by efficiency: 1) Solar - 20%, 2) Wind - 15%, 3) Coal - 10%",
            },
            {
                description: "Order these practices by environmental impact (least first)",
                messages: [
                    { id: 1, text: "Recycling", hash: 293, position: randomPos() },
                    { id: 2, text: "Composting", hash: 678, position: randomPos() },
                    { id: 3, text: "Solar panels", hash: 451, position: randomPos() }
                ],
                password: "recycling-composting-solar",
                explanation: "Practices ordered by impact: 1) Recycling - basic waste reduction, 2) Composting - organic waste, 3) Solar panels - renewable energy",
            }
        ],
        finalPassword: "Green"
    },
    game6: {
        title: "Ancient Civilizations Challenge",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "History",
        description: "Breach the historical archive of an archaeology professor.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=320&auto=format",
        energyCost: 10,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Prof. David Stone, Archaeology Department Head
System: Historical Artifacts Database
Background: Prof. Stone organizes artifacts by their historical period.
Your mission is to understand his organization system to access the artifacts database.
Each phase will test your understanding of basic historical timelines.`,
        phases: [
            {
                description: "Arrange these periods by year (oldest first)",
                messages: [
                    { id: 1, text: "Stone Age", hash: 3500, position: randomPos() },
                    { id: 2, text: "Bronze Age", hash: 1792, position: randomPos() },
                    { id: 3, text: "Iron Age", hash: 2100, position: randomPos() }
                ],
                password: "stone-bronze-iron",
                explanation: "Historical periods ordered by age: 1) Stone Age - 2.5 million years ago, 2) Bronze Age - 3300 BCE, 3) Iron Age - 1200 BCE",
            },
            {
                description: "Order these civilizations by emergence (earliest first)",
                messages: [
                    { id: 1, text: "Egypt", hash: 2686, position: randomPos() },
                    { id: 2, text: "Greece", hash: 2055, position: randomPos() },
                    { id: 3, text: "Rome", hash: 1550, position: randomPos() }
                ],
                password: "egypt-greece-rome",
                explanation: "Civilizations ordered by emergence: 1) Egypt - 3100 BCE, 2) Greece - 800 BCE, 3) Rome - 753 BCE",
            }
        ],
        finalPassword: "History"
    },
    game7: {
        title: "INPT ya jawhara",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "Legendery",
        description: "How much you know about INPT? and how much is what you know true?",
        image: "https://th.bing.com/th/id/OIP.2BqMtksMdCrEhJfazbKfqwAAAA?w=194&h=194&rs=1&pid=ImgDetMain",
        energyCost: 0,
        length: 4,
        maxAttempts: 200,
        difficulty: "Hard",
        detailedDescription: `Unravel the mysteries of antiquity by correctly sequencing pivotal moments from humanity's earliest civilizations. Each correct arrangement reveals part of the ultimate password that unlocks forgotten knowledge.`,
        phases: [
            {
                description: "answer these questions and put them in the order indicated by there numbers to move to next level, no separator, just concatenate the answers",
                messages: [
                    { id: 1, text: "The inexistant classroom in the hall B (write b...).", hash: 1, position: randomPos() },
                    { id: 2, text: "The letter of the hall that no one can enter (just the letter uppercase)", hash: 2, position: randomPos() },
                    { id: 3, text: "the agency resposable for INPT activities", hash: 3, position: randomPos() },
                    { id: 4, text: "INPT is known by Z....", hash: 4, position: randomPos() },
                    { id: 5, text: "An eye arrounded by sports fields", hash: 5, position: randomPos() }
                ],
                password: "b216DANRTZlafa7ayat",
                explanation: "This phase combines specific knowledge about INPT: 1) The non-existent classroom in Hall B (b216), 2) The restricted Hall D, 3) The agency responsible for INPT activities (ANRT), 4) INPT's nickname (Zlafa), 5) The eye surrounded by sports fields (7ayat). This sequence reveals specific details about INPT's physical layout and organizational structure.",
            },
            {
                description: "what among these is the nearest to the INPT building? (with - as a separator)",
                messages: [
                    { id: 1, text: "Campus", hash: 302, position: randomPos() },
                    { id: 2, text: "IAV", hash: 301, position: randomPos() },
                    { id: 3, text: "L9amra", hash: 13, position: randomPos() },
                    { id: 4, text: "ENSIAS", hash: 905, position: randomPos() },
                    { id: 5, text: "Agdal", hash: 343, position: randomPos() }
                ],
                password: "302-301-905-13-343",
                explanation: "These locations are ordered by their distance from INPT: 1) Campus (302) - immediate surroundings, 2) IAV (301) - adjacent institution, 3) ENSIAS (905) - nearby engineering school, 4) L9amra (13) - nearby neighborhood, 5) Agdal (343) - more distant area. This shows the geographical context of INPT's location.",
            },
            {
                description: "Order these clubs starting from the best one to the least one, commite masjid not included since its not a club, otherwise it will be the best one",
                messages: [
                    { id: 1, text: "CAS", hash: 20, position: randomPos() },
                    { id: 2, text: "GDI", hash: 102, position: randomPos() },
                    { id: 3, text: "A2S", hash: 65, position: randomPos() },
                    { id: 4, text: "MSC", hash: 56, position: randomPos() },
                    { id: 5, text: "ENACTUS", hash: 928, position: randomPos() }
                ],
                password: "20-102-56-928-65",
                explanation: "These clubs are ordered by their impact and activity level: 1) CAS (20) - most active and influential, 2) GDI (102) - strong presence, 3) MSC (56) - active in multiple domains, 4) ENACTUS (928) - social entrepreneurship focus, 5) A2S (65) - Junior entrepreneurship club. This ranking reflects the clubs' relative prominence and activity at INPT.",
            },
            {
                description: "A7san Filiere 🙂",
                messages: [
                    { id: 1, text: "ASEDS", hash: 1, position: randomPos() },
                    { id: 2, text: "ICCN", hash: 3021, position: randomPos() },
                    { id: 3, text: "DATA", hash: 2031, position: randomPos() },
                    { id: 4, text: "SMART", hash: 2301, position: randomPos() },
                    { id: 5, text: "CLOUD", hash: 2013, position: randomPos() },
                    { id: 6, text: "SESNum", hash: 2310, position: randomPos() },
                    { id: 7, text: "AMOA", hash: 3201, position: randomPos() }
                ],
                password: "1-1-1-1-1-1-1",
                explanation: "Among all the filieres at INPT, ASEDS (1) stands out as the most prestigious and challenging program. It delivers  advanced studies in digital systems, making it the most sought-after specialization at the institute. This reflects its reputation as the premier program at INPT.",
            },
        ],
        finalPassword: "INPT"
    },
    game8: {
        title: "The Hidden Message of Life",
        timeLimit: 120,
        isDaily: false,
        timed: false,
        theme: "Biology",
        description: "Breach the biology lab of a genetics researcher.",
        image: "https://th.bing.com/th/id/OIP.JwHy9evBtiPthoT0ou1lvQHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7",
        energyCost: 10,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Lisa Chen, Genetics Research Director
System: DNA Research Database
Background: Dr. Chen uses simple biological concepts to organize her research.
Your mission is to understand her organization system to access the research database.
Each phase will test your understanding of basic biological concepts.`,
        phases: [
            {
                description: "Arrange these by size (smallest first) and use the numbers to form the password",
                messages: [
                    {
                        id: 1,
                        text: "Cell",
                        hash: 1,
                        position: randomPos()
                    },
                    {
                        id: 2,
                        text: "Tissue",
                        hash: 14,
                        position: randomPos()
                    },
                    {
                        id: 3,
                        text: "Organ",
                        hash: 3005,
                        position: randomPos()
                    }
                ],
                password: "1-14-3005",
                explanation: "Biological structures ordered by size: 1) Cell - smallest unit, 2) Tissue - group of cells, 3) Organ - group of tissues. The numbers represent their relative sizes in micrometers.",
            },
            {
                description: "Order these by complexity (simplest first) and use the numbers to form the password",
                messages: [
                    {
                        id: 1,
                        text: "Bacteria",
                        hash: 9,
                        position: randomPos()
                    },
                    {
                        id: 2,
                        text: "Plant",
                        hash: 10,
                        position: randomPos()
                    },
                    {
                        id: 3,
                        text: "Animal",
                        hash: 1002,
                        position: randomPos()
                    }
                ],
                password: "9-10-1002",
                explanation: "Organisms ordered by complexity: 1) Bacteria - single cell, 2) Plant - simple multicellular, 3) Animal - complex multicellular. The numbers represent their approximate number of cell types.",
            }
        ],
        finalPassword: "Life"
    },
    game9: {
        title: "Time Traveler Dungeon",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "History",
        description: "Breach the historical archive of a time period specialist.",
        image: "https://www.bing.com/images/search?view=detailV2&ccid=woVlSlpa&id=4D9358D62FB763DE7F5582822777DF1F5119232B&thid=OIP.woVlSlpaDKFO8MOsoAupcAHaGg&mediaurl=https%3a%2f%2foalevelnotes.com%2fwp-content%2fuploads%2f2015%2f02%2fCoffee-History.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c285654a5a5a0ca14ef0c3aca00ba970%3frik%3dKyMZUR%252ffdyeCgg%26pid%3dImgRaw%26r%3d0&exph=1054&expw=1200&q=history&simid=607995305259185950&FORM=IRPRST&ck=2688509708E4882BA3D4ED1CD7AC77A0&selectedIndex=5&itb=0",
        energyCost: 15,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Robert Time, Historical Periods Specialist
System: Time Period Research Database
Background: Dr. Time organizes everything chronologically.
Your mission is to understand his organization system to access the research database.
Each phase will test your understanding of basic historical timelines.`,
        phases: [
            {
                description: "Arrange these events by year (oldest first) and use the numbers to form the password",
                messages: [
                    {
                        id: 1, 
                        text: "Invention of writing",
                        hash: 3200,
                        position: randomPos()
                    },
                    {
                        id: 2, 
                        text: "Roman Empire",
                        hash: 27,
                        position: randomPos()
                    },
                    {
                        id: 3, 
                        text: "Middle Ages",
                        hash: 500,
                        position: randomPos()
                    }
                ],
                password: "3200-27-500",
                explanation: "Historical events ordered by year: 1) Writing - 3200 BCE, 2) Roman Empire - 27 BCE, 3) Middle Ages - 500 CE. The numbers represent the actual years.",
            },
            {
                description: "Order these inventions by year (earliest first) and use the numbers to form the password",
                messages: [
                    {
                        id: 1,
                        text: "Wheel",
                        hash: 3500,
                        position: randomPos()
                    },
                    {
                        id: 2,
                        text: "Printing press",
                        hash: 1440,
                        position: randomPos()
                    },
                    {
                        id: 3,
                        text: "Electricity",
                        hash: 1800,
                        position: randomPos()
                    }
                ],
                password: "3500-1440-1800",
                explanation: "Inventions ordered by year: 1) Wheel - 3500 BCE, 2) Printing press - 1440 CE, 3) Electricity - 1800 CE. The numbers represent the actual years of invention.",
            }
        ],
        finalPassword: "Time"
    },
    game10: {
        title: "Biological Complexity Ladder",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "Biology",
        description: "Breach the biology research center of a complexity specialist.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=320&auto=format",
        energyCost: 12,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Sarah Complex, Biological Systems Specialist
System: Complexity Research Database
Background: Dr. Complex organizes everything by biological complexity.
Your mission is to understand her organization system to access the research database.
Each phase will test your understanding of basic biological organization.`,
        phases: [
            {
                description: "Order these by size (smallest first)",
                messages: [
                    { id: 1, text: "Atom", hash: 842, position: randomPos() },
                    { id: 2, text: "Molecule", hash: 193, position: randomPos() },
                    { id: 3, text: "Cell", hash: 557, position: randomPos() }
                ],
                password: "atom-molecule-cell",
                explanation: "Biological structures ordered by size: 1) Atom - smallest, 2) Molecule - group of atoms, 3) Cell - group of molecules",
            },
            {
                description: "Arrange these by complexity (simplest first)",
                messages: [
                    { id: 1, text: "Tissue", hash: 928, position: randomPos() },
                    { id: 2, text: "Organ", hash: 476, position: randomPos() },
                    { id: 3, text: "System", hash: 315, position: randomPos() }
                ],
                password: "tissue-organ-system",
                explanation: "Biological structures ordered by complexity: 1) Tissue - group of cells, 2) Organ - group of tissues, 3) System - group of organs",
            }
        ],
        finalPassword: "Biology"
    },
    game11: {
        title: "Digital Evolution Maze",
        timeLimit: 120,
        isDaily: false,
        timed: true,
        theme: "Digital",
        description: "Breach the computer science lab of a technology historian.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=320&auto=format",
        energyCost: 8,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Alan Tech, Computer History Specialist
System: Technology Evolution Database
Background: Dr. Tech organizes everything by technological development.
Your mission is to understand his organization system to access the research database.
Each phase will test your understanding of basic technology evolution.`,
        phases: [
            {
                description: "Order these by year (earliest first)",
                messages: [
                    { id: 1, text: "Calculator", hash: 412, position: randomPos() },
                    { id: 2, text: "Personal computer", hash: 879, position: randomPos() },
                    { id: 3, text: "Smartphone", hash: 253, position: randomPos() }
                ],
                password: "calculator-pc-smartphone",
                explanation: "Technologies ordered by year: 1) Calculator - 1960s, 2) Personal computer - 1970s, 3) Smartphone - 2000s",
            },
            {
                description: "Arrange these by storage capacity (smallest first)",
                messages: [
                    { id: 1, text: "Floppy disk", hash: 781, position: randomPos() },
                    { id: 2, text: "CD", hash: 346, position: randomPos() },
                    { id: 3, text: "USB drive", hash: 925, position: randomPos() }
                ],
                password: "floppy-cd-usb",
                explanation: "Storage devices ordered by capacity: 1) Floppy disk - 1.44MB, 2) CD - 700MB, 3) USB drive - multiple GB",
            }
        ],
        finalPassword: "Digital"
    },
    game12: {
        title: "Societal Impact Nexus",
        timeLimit: 120,
        isDaily: true,
        timed: true,
        theme: "History",
        description: "Breach the social research center of a societal trends analyst.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=320&auto=format",
        energyCost: 10,
        length: 2,
        maxAttempts: 15,
        difficulty: "Easy",
        detailedDescription: `
Target: Dr. Maria Social, Societal Trends Analyst
System: Social Impact Research Database
Background: Dr. Social organizes everything by societal impact.
Your mission is to understand her organization system to access the research database.
Each phase will test your understanding of basic social concepts.`,
        phases: [
            {
                description: "Order these by adoption speed (slowest first)",
                messages: [
                    { id: 1, text: "Electric cars", hash: 729, position: randomPos() },
                    { id: 2, text: "Mobile phones", hash: 386, position: randomPos() },
                    { id: 3, text: "Social media", hash: 154, position: randomPos() }
                ],
                password: "cars-phones-social",
                explanation: "Technologies ordered by adoption: 1) Electric cars - slow adoption, 2) Mobile phones - medium adoption, 3) Social media - fast adoption",
            },
            {
                description: "Arrange these by impact (least first)",
                messages: [
                    { id: 1, text: "Local change", hash: 293, position: randomPos() },
                    { id: 2, text: "National change", hash: 678, position: randomPos() },
                    { id: 3, text: "Global change", hash: 451, position: randomPos() }
                ],
                password: "local-national-global",
                explanation: "Changes ordered by impact: 1) Local - affects small area, 2) National - affects country, 3) Global - affects world",
            }
        ],
        finalPassword: "Society"
    }
};
export const getGamesDB = () => {
    return games;
};
export async function getGame(gameId) {
    const res = await getGamesDB()[gameId];
    return res;
}