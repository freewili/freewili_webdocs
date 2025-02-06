"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[8749],{1895:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"theremini","metadata":{"permalink":"/blog/theremini","source":"@site/blog/2025-02-06/index.mdx","title":"thereMINI: Creating Music with Hand Gestures Using FREE-WILi for a Touch-Free Sound Experience","description":"The Wearable Theremin! thereMINI is a wearable theremin using FREE-WILi to turn hand movements into music, translating motion into notes and volume for a touch-free, expressive sound experience.","date":"2025-02-06T00:00:00.000Z","tags":[{"inline":false,"label":"FREE-WILi","permalink":"/blog/tags/FREE-WILi","description":"Make Embedded Systems Fun Again !"},{"inline":false,"label":"SpartaHack X","permalink":"/blog/tags/spartahack-x","description":"spartahack-x"},{"inline":false,"label":"Hackathon","permalink":"/blog/tags/hackathon","description":"hackathon"},{"inline":false,"label":"Student Project","permalink":"/blog/tags/studentproject","description":"studentproject"}],"readingTime":3.015,"hasTruncateMarker":true,"authors":[{"name":"Evan Fioritto","title":"Michigan State University Junior Majoring in Computer Science, Minoring in Information Technology","url":"https://www.linkedin.com/in/evanfioritto/","imageURL":"https://media.licdn.com/dms/image/v2/D5603AQGnUgiBv-EyUQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725555942934?e=2147483647&v=beta&t=EZGdis3uVdg-VTrpbg5lFxDJ3zfN2TJWS2KDleEK1Dk","key":"Evan Fioritto (fiorittoev)","page":null},{"name":"Richard Glosser","title":"Computer Science @ Michigan State University","url":"https://www.linkedin.com/in/richard-glosser-76145426b","imageURL":"https://d112y698adiu2z.cloudfront.net/photos/production/user_photos/003/042/349/datas/profile.jpg","key":"Richard Glosser","page":null},{"name":"Tess Gonda","title":"CSE Student @ Michigan State University","url":"https://www.linkedin.com/in/tess-gonda-abb1b5309","imageURL":"https://media.licdn.com/dms/image/v2/D4D03AQFEjwMKg6LocQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715288605164?e=2147483647&v=beta&t=MYl5stpGSNIVDulr1GvNM464u2yySSsfh0QWm4AIatw","key":"Tess Gonda","page":null},{"name":"Ramya Ramkumar","title":"CS Student @ Michigan State University","url":"https://www.linkedin.com/in/ramyaramkumar","imageURL":"https://media.licdn.com/dms/image/v2/D5603AQHSYB6UnKWDNw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718283609856?e=2147483647&v=beta&t=P6G5ZGE6kc8C50y8oU5YDiAKRkPlgK-FV8eRhuu6wuA","key":"Ramya Ramkumar","page":null}],"frontMatter":{"slug":"theremini","title":"thereMINI: Creating Music with Hand Gestures Using FREE-WILi for a Touch-Free Sound Experience","authors":["Evan Fioritto (fiorittoev)","Richard Glosser","Tess Gonda","Ramya Ramkumar"],"tags":["FREE-WILi","SpartaHack X","hackathon","student project"]},"unlisted":false,"nextItem":{"title":"WiLi-Party LED Minigames","permalink":"/blog/wiLi-party"}},"content":"The Wearable Theremin! thereMINI is a wearable theremin using FREE-WILi to turn hand movements into music, translating motion into notes and volume for a touch-free, expressive sound experience.\\r\\n\\r\\nimport MyCarousel from \'@site/src/components/Carousel\';\\r\\n\\r\\n<MyCarousel />\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n## \ud83c\udfb6 thereMINI: A Wearable Theremin \ud83c\udfb6 ##\\r\\n\\r\\n*Turning motion into music with FREE-WILi*\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83c\udf1f Inspiration\\r\\n\\r\\nWe designed this as an accessibility device for one-handed music creation but soon saw its broader potential. Inspired by conducting, we mapped hand motion to notes and volume, making music creation more intuitive and inclusive. We continue to design this as a accessible device, but it is for everyone!\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83c\udfb5 What It Does\\r\\nUsing the FREE-WILi we were able to extract the accelerometer data as serial data. Converting said data to MIDI data (a music data type) we were able to use music software, like Ableton to translate it into virtual instrument playing. Moving your hand down increases volume and putting it down increases it. Moving your hand left or right changes notes, specifically a scale of 8 notes. Combining all that we can emulate a full virtual keyboard with just the movement of your hand!\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83d\udee0\ufe0f How We Built It\\r\\n\\r\\n* **Hardware:** FREE-WILi device is a wearable microprocessor, outfitted with many sensors and capabilities, the one we focused on is the accelerometer. We used this mainly to translate xyz coordinates into angles, and then MIDI values for the notes and volume. This data is sent through USB serial data to be read by the software.\\r\\n* **Software:** We used C++, and C to embed functionality for the FREE-WILi and python to clean and extract the data from it. loopMIDI is a software that creates a virtual MIDI controller that reads from our script, and feeds it to DAWs.\\r\\n* **Implementation:** The horizontal rotation is used for the notes on a rotation of -90 -> 90 degrees, and the vertical rotation is used for lowering and increasing the pitch on -30 -> 30 degrees.\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83d\udea7 Challenges We Ran Into\\r\\nWe addressed USB port access challenges between WSL and Windows, ensuring proper connectivity. Translating accelerometer data into MIDI required refining sensitivity and applying filtering to improve accuracy. By optimizing data formatting and transmission, we facilitated seamless MIDI transfer. Through continuous troubleshooting and iterative testing, we achieved smooth integration between hardware and software.\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83c\udfc6 Accomplishments We\'re Proud Of\\r\\nOur project focused on turning complex tasks into key milestones. A major achievement was enabling MIDI data transfer from FREE-WILi to a computer, converting user movements into precise musical instructions like pitch and velocity. Our greatest achievement was the design of the notes and pitch to hand movements, and what was the most ergonomic and accessible way we would implement it.\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83d\udcda What We Learned\\r\\nWe learned how to process real-time sensor data into MIDI signals, ensuring seamless hardware-software integration. Designing for accessibility taught us the importance of intuitive and ergonomic control. Optimizing MIDI implementation required refining pitch, velocity, and minimizing latency. Through iterative problem-solving, we debugged formatting errors and fine-tuned movement sensitivity.\\r\\n\\r\\n<hr/>\\r\\n\\r\\n## \ud83d\ude80 What\'s Next for thereMINI\\r\\nWe plan to enhance thereMINI with scale mode, chord mode, and octave control, mapped to buttons on the FREE-WILi for seamless switching. A GUI will provide visual feedback and customization options. Beyond development, thereMINI has potential as an accessible instrument, an innovative tool for musicians, and an educational device for learning music through motion.\\r\\n\\r\\n<hr/>\\r\\n\\r\\n### Built With\\r\\n\\r\\n```ableton``` ```accelerometer``` ```c``` ```c++``` ```freewili``` ```loopmidi``` ```pyserial``` ```python``` ```rtmidi```\\r\\n\\r\\n### Try it out\\r\\n\\r\\n<div class=\\"github-img\\">\\r\\n\\r\\n![GitHub](./github.png) <a href=\\"https://github.com/fiorittoev/theremini\\" target=\\"_blank\\"><span>GitHub Repo</span></a>\\r\\n</div>\\r\\n\\r\\n*Source* - [https://devpost.com/software/theremini](https://devpost.com/software/theremini)"},{"id":"wiLi-party","metadata":{"permalink":"/blog/wiLi-party","source":"@site/blog/2024-12-10/index.md","title":"WiLi-Party LED Minigames","description":"Inspiration","date":"2024-12-10T00:00:00.000Z","tags":[{"inline":false,"label":"FREE-WILi","permalink":"/blog/tags/FREE-WILi","description":"Make Embedded Systems Fun Again !"},{"inline":false,"label":"Mhacks","permalink":"/blog/tags/mhacks","description":"mhacks"},{"inline":false,"label":"Hackathon","permalink":"/blog/tags/hackathon","description":"hackathon"},{"inline":false,"label":"Student Project","permalink":"/blog/tags/studentproject","description":"studentproject"}],"readingTime":2.355,"hasTruncateMarker":true,"authors":[{"name":"Andi Shaska","title":"CSE @ University of Michigan","url":"https://www.linkedin.com/in/andi-shaska","imageURL":"https://media.licdn.com/dms/image/v2/D5603AQHXrZrh8KFeEw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703796143917?e=2147483647&v=beta&t=RqiGYItuNXyk1k7RFprjvBrMkEkYIgivHqAJpiA8XCg","key":"Andi Shaska","page":null},{"name":"Harshad Bhojan","title":"Computer Science @ University of Michigan CoE","url":"https://www.linkedin.com/in/harshad-bhojan","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQEIRmbQhhAB5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1608520744606?e=2147483647&v=beta&t=g5S5Fgc41al3WUtTO6aVXK_vjtp1L2QcMQTgVorbTzg","key":"Harshad Bhojan","page":null}],"frontMatter":{"slug":"wiLi-party","title":"WiLi-Party LED Minigames","authors":["Andi Shaska","Harshad Bhojan"],"tags":["FREE-WILi","mhacks","hackathon","student project"]},"unlisted":false,"prevItem":{"title":"thereMINI: Creating Music with Hand Gestures Using FREE-WILi for a Touch-Free Sound Experience","permalink":"/blog/theremini"},"nextItem":{"title":"WiLi Watch \u2013 Voice-Activated Wearable for Smart Home Control","permalink":"/blog/wiLi-watch"}},"content":"import YouTubeEmbed from \'@site/src/components/YouTubeEmbed\';\\n\\n<YouTubeEmbed videoId=\\"7VzAm0KVVoo\\" />\\n\\n<br/>\\n\\n## Inspiration\\n\\nWe love competitive games like Mario Party and the cuteness of small devices like Tamagotchi. We wanted a project that combines the two, which is why the free wili seemed like a great system to use.\\n\\n\x3c!-- truncate --\x3e\\n\\n## What it does\\n\\nGives users the ability to play four 1v1 games\\n\\n1) Mashing game - Who can rack up the highest number of button presses before time runs out?\\n2) Memory game - A pattern sequence, up to 3 levels of increasing difficulty. Test your memory!\\n3) Counting game - Keep track of your color light and how many times it flashes. Don\'t blink.\\n4) Reaction game - Who can react faster? Click the color that shows up as quick as you can.\\n\\nThe lights at the end of a game blink red if P1 has won and green if P2 (yellow if tie).\\n\\n## How we built it\\n\\nWe used two Python libraries. The FreeWheel API to communicate with the FREE-WILi and flash our code, and the pygame library to receive and read controller input. We also have a given header file for C++ definitions of useful functions that allow us to configure the FREE-WILi board, such as LED toggles and Display images.\\n\\n## Challenges we ran into\\n\\nThe FREE-WILi had some hardware limitations that prevented us from fully fledging out our implementation as was planned. Primarily, its I/O capabilities are limited, and cannot read controller input through USB-C as a general purpose computer can, so we had to keep the system wired to the computer during play. We also ran into space issues in uploading images to the display, so the UI is not as in depth as we would have liked.\\n\\n## Accomplishments that we\'re proud of\\n\\nFor having found out about this device only 24 hours before submission, we are very proud of the fact that we were able to flash the device with our software, turn on LEDs, upload images, and have it function properly with our controller input, despite the limitations we encountered.\\n\\n## What we learned\\n\\nWe learned a lot about how FREE-WILi works, how to write to it, and its functionalities. We also learned how to use pygame to process user inputs from a controller, to parse and control them correctly, and also how to manage multiple controllers.\\n\\n## What\'s next for Wili-Party\\n\\nIdeally, we would love to make the controller input work without running it through a computer for processing. We want the games to be able to be fully run on the FREE-WILi itself, with just two controllers as support. We would also like to make the communication wireless, so we are not cluttered with USB-C cables while playing.\\n\\n### Built With\\n\\n```c++``` ```freewili``` ```pygame``` ```python``` ```time```\\n\\n*Source* - [https://devpost.com/software/wili-party](https://devpost.com/software/wili-party)"},{"id":"wiLi-watch","metadata":{"permalink":"/blog/wiLi-watch","source":"@site/blog/2024-12-10/wili-watch.md","title":"WiLi Watch \u2013 Voice-Activated Wearable for Smart Home Control","description":"Inspiration","date":"2024-12-10T00:00:00.000Z","tags":[{"inline":false,"label":"FREE-WILi","permalink":"/blog/tags/FREE-WILi","description":"Make Embedded Systems Fun Again !"},{"inline":false,"label":"Mhacks","permalink":"/blog/tags/mhacks","description":"mhacks"},{"inline":false,"label":"Hackathon","permalink":"/blog/tags/hackathon","description":"hackathon"},{"inline":false,"label":"Student Project","permalink":"/blog/tags/studentproject","description":"studentproject"}],"readingTime":3.49,"hasTruncateMarker":true,"authors":[{"name":"Ethan McKean","url":"https://github.com/ethanmckean","imageURL":"https://lh3.googleusercontent.com/a/AEdFTp6HQQoZHtw_25wWy-SkVoz_cG9_jRL5EQWS_DZO=s96-c?height=180&width=180","key":"Ethan McKean","page":null},{"name":"Anshul Mohanty","imageURL":"https://lh3.googleusercontent.com/a/ACg8ocK9K2cEyx4J_mFaKycysLoYvU1645F9do825AwoWqDBDQi6BA=s96-c?height=180&width=180","key":"Anshul Mohanty","page":null},{"name":"Alexandra Enders","title":"Computer Engineering Student at University of Michigan","url":"https://www.linkedin.com/in/alexandra-enders-767bb21a5/","imageURL":"https://media.licdn.com/dms/image/v2/D5603AQH0frMv24KVAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682174030294?e=2147483647&v=beta&t=dponlR2zkvlndYaTH8L2NwO9nBFaYsHlm3qlCnGT4Nk","key":"Alexandra Enders","page":null},{"name":"Austyn Nguyen","title":"Computer Science @ University of Michigan CoE","url":"https://www.linkedin.com/in/austyn-an-nguyen","imageURL":"https://media.licdn.com/dms/image/v2/D4E03AQHKClE_KoMA8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728396078758?e=2147483647&v=beta&t=kloWr79wkHIUm5fT8rTFhoISAaz64LGOsenxFeHtvqM","key":"Austyn Nguyen","page":null}],"frontMatter":{"slug":"wiLi-watch","title":"WiLi Watch \u2013 Voice-Activated Wearable for Smart Home Control","authors":["Ethan McKean","Anshul Mohanty","Alexandra Enders","Austyn Nguyen"],"tags":["FREE-WILi","mhacks","hackathon","student project"]},"unlisted":false,"prevItem":{"title":"WiLi-Party LED Minigames","permalink":"/blog/wiLi-party"}},"content":"import YouTubeEmbed from \'@site/src/components/YouTubeEmbed\';\\r\\n\\r\\n<YouTubeEmbed videoId=\\"UYSAEgx3lSQ\\" />\\r\\n\\r\\n<br/>\\r\\n\\r\\n## Inspiration\\r\\n\\r\\nIn a world increasingly reliant on technology, the ability to interact with our surroundings effortlessly is essential, especially for individuals with mobility challenges. Enter the WiLi Watch, a wearable wristband powered by FREE-WILi and Groq aimed to empower users with independence.\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\nThe journey began with a vision: to create a device that could simplify and enhance daily living for individuals with movement impairments. Our team recognized the need for an intuitive interface that would allow users to control their smart home environment without the barriers typically posed by traditional devices. By harnessing the capabilities of the watch\'s built-in infrared (IR) transmitters, we sought to bridge the gap between technology and accessibility.\\r\\n\\r\\n## What it does\\r\\n\\r\\nThe user wears an embedded wristband device that can be used to control and interact with their environment. Here is the specific tasks that can be performed wirelessly from your wrist:\\r\\n\\r\\n- Turn on and off lights\\r\\n- Lock and unlock your door\\r\\n- Display live steamed camera footage of your doorstep\\r\\n- Bring up your GCal or the weather to be displayed These tasks can either be initiated through buttons on the wristband, or from asking out loud for certain actions to be done. We use AI to predict your needs as well based on what you say. For example, if you mention \\"Oh did I forget to lock the door?\\" the door will lock automatically, and saying \\"will I need an umbrella later?\\" will cause the weather report to go on display. Additionally, a speaker announces to you every action that is done for peace of mind. Finally, one can inquire about who is at their door and the hub will describe to you your visitor.\\r\\n\\r\\n## How we built it\\r\\n\\r\\nThis project relies on the wireless IR communication between a FREE-WILi device and a smart home \\"hub\\" consisting of an Orange Pi 5 and Arduino Nano that control other peripherals such as a camera, door \\"locking\\" system, IR receiver module, speaker, microphone, and external monitor. The frameworks we used for development are Groq for easy LLM use (Whisper for speech to text and Llama for natural language reasoning) and Cartesia for speech-text interfacing, all developed on a python virtual environment. The project is also modular to be used with Intel\'s IDC if private LLM generation is desired (we setup a flask server serving llama.cpp inferencing on a compute instance but ran out of credits)\\r\\n\\r\\n## Challenges we ran into\\r\\n\\r\\n- Using GPIO on the Orange Pi; we had to pivot after hours to integrate another microcontroller with a functional GPIO interface for motor control and IF receiving\\r\\n- Networking compatibility; we found out later than we\'d like that the Free WiLi device which we centered our project around does not have capabilities to connect to the internet / Bluetooth so we switched to IF communication\\r\\n- Python development on Linux; Python virtual environments are not for the weak of heart\\r\\n\\r\\n## Accomplishments that we\'re proud of\\r\\n\\r\\n- Fully functional prototype built from the ground up in 24 hours!!\\r\\n- Door locking system on a physical prototype + doorstep camera\\r\\n- Overcoming Free WiLi debugging hurdles in the middle of the night\\r\\n- Kept persistence even through sleep deprivation\\r\\n\\r\\n## What we learned\\r\\n\\r\\n- Hardware hacking is challenging, but super fun!\\r\\n- Cable management can and will stress you out\\r\\n- Implementing APIs in a larger program\\r\\n- Wireless communication (IR and RF)\\r\\n- Ideation is so important\\r\\n\\r\\n## What\'s next for The WiLi Watch\\r\\n\\r\\nIncrease in functionalities available on the watch as well as real world implementation (metal instead of cardboard). A few functionalities that we came up with that could be expanded on in further development are as follows:\\r\\n\\r\\n- Autonomous robotic car assistant that can retrieve items\\r\\n- Interact with kitchen appliances (turn on/off stove)\\r\\n- Emergency response / alarm system\\r\\n- Temperature control\\r\\n\\r\\n## Built With\\r\\n\\r\\n`arduino-nano` `cartesia` `freewili` `groq` `llama` `orange-pi` `python` `whisper`\\r\\n\\r\\n### Try it out\\r\\n\\r\\n\x3c!-- ![GitHub](./github.png) [GitHub Repo](https://github.com/ethanmckean/The-WiLi-Watch-mhacks24) --\x3e\\r\\n\x3c!-- ![GitHub](./github.png) <a target=\\"_self\\" rel=\\"noopener noreferrer\\" href=\\"https://github.com/ethanmckean/The-WiLi-Watch-mhacks24\\" class=\\"inline-image\\">GitHub Repo</a> --\x3e\\r\\n\\r\\n<div class=\\"github-img\\">\\r\\n\\r\\n![GitHub](./github.png) <a href=\\"https://github.com/ethanmckean/The-WiLi-Watch-mhacks24\\" target=\\"_blank\\"><span>GitHub Repo</span></a>\\r\\n</div>\\r\\n\\r\\n*Source* - [https://devpost.com/software/wili-watch](https://devpost.com/software/wili-watch)"}]}}')}}]);