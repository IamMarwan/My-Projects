const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// Basic mapping of user inputs to responses
const inputResponseMap = {
    "hi": "Hello, How can I help you today?",
    "Hi": "Hello, How can I help you today?",
    "HI": "Hello, How can I help you today?",

    "how are you": "I'm doing well, thanks! How about you?",
    "How are you": "I'm doing well, thanks! How about you?",
    "HOW ARE YOU": "I'm doing well, thanks! How about you?",

    "what is ecomotion?": "EcoMotion is an innovative project focused on transforming kinetic energy from everyday movements, such as walking and driving, into clean, sustainable electricity. Our goal is to make urban environments greener and more energy-efficient.",
    "What is ecomotion?": "EcoMotion is an innovative project focused on transforming kinetic energy from everyday movements, such as walking and driving, into clean, sustainable electricity. Our goal is to make urban environments greener and more energy-efficient.",
    "WHAT IS ECOMOTION?": "EcoMotion is an innovative project focused on transforming kinetic energy from everyday movements, such as walking and driving, into clean, sustainable electricity. Our goal is to make urban environments greener and more energy-efficient.",

    "what is your name": "I'm a EcoBot, and I am here to help you.",
    "what is ecomotion?": "EcoMotion is an innovative project focused on transforming kinetic energy from everyday movements, such as walking and driving, into clean, sustainable electricity. Our goal is to make urban environments greener and more energy-efficient.",
    "how does ecomotion work?": "EcoMotion captures kinetic energy through specially designed devices installed in areas with high foot or vehicle traffic, like roads, sidewalks, and parking lots. This energy is then converted into electricity and fed into the local power grid to power streetlights, traffic signals, and other urban amenities.",
    "what are the benefits of ecomotion?": "The benefits of EcoMotion include reducing carbon emissions, promoting environmental conservation, and providing a sustainable energy source. It also raises awareness about clean energy options and engages communities in sustainable practices.",
    "how can i get involved with ecomotion?": "You can get involved with EcoMotion by volunteering, making a donation, or simply spreading the word about our mission. Additionally, you can use our app to track your personal contribution to energy generation and learn more about sustainable energy solutions.",
    "who is behind ecomotion?": "EcoMotion is a collaborative effort involving environmental enthusiasts, engineers, and urban planners. Our team is dedicated to creating innovative solutions for sustainable energy generation and promoting a greener future for our cities.",
    "where can i find more information about ecomotion?": "For more information about EcoMotion, please visit our website at www.ecomotion.com or contact us via email at EcoMotion@gmail.com. We're always happy to provide more details about our project and how you can be a part of it.",
    "can ecomotion be implemented in any city?": "Yes, EcoMotion is designed to be adaptable to different urban environments. We work closely with municipalities and urban planners to tailor our solutions to the specific needs and infrastructure of each city.",
    "is ecomotion cost-effective?": "EcoMotion is designed to be a cost-effective solution for sustainable energy generation. By leveraging existing urban infrastructure and traffic, we minimize the need for additional resources, making it an economically viable option for cities.",
    "how does ecomotion contribute to sustainability?": "EcoMotion contributes to sustainability by providing a renewable energy source that reduces dependence on fossil fuels, lowers carbon emissions, and promotes the use of clean energy in urban areas.",
    "what future plans does ecomotion have?": "Our future plans include expanding EcoMotion to more cities, continuously improving our technology, and exploring new ways to harness kinetic energy for sustainable purposes. We aim to be at the forefront of innovative solutions for a sustainable future.",
    "what questions can you answer about ecomotion?": "I can answer questions about what EcoMotion is, how it works, its benefits, how to get involved, who is behind it, where to find more information, whether it can be implemented in any city, if it's cost-effective, how it contributes to sustainability, and what its future plans are.",
    "bye": "Goodbye! Have a great day!",
    "hello": "Hi there! What can I do for you?",
    "good morning": "Good morning! How can I assist you?",
    "good afternoon": "Good afternoon! How can I help you?",
    "good evening": "Good evening! How can I assist you?",
    "who are you": "I am EcoBot, your friendly assistant for all things EcoMotion.",
    "what is ecomotion": "EcoMotion is a project focused on generating clean energy from the motion of vehicles.",
    "tell me about ecomotion": "EcoMotion aims to create sustainable energy solutions by harnessing kinetic energy from vehicles to generate electricity.",
    "how does ecomotion work": "EcoMotion captures the kinetic energy from moving vehicles and converts it into clean electricity.",
    "what services do you offer": "We offer energy generation, sustainable city solutions, smart energy management, and a user-friendly app to track your energy contributions.",
    "where can i use ecomotion": "EcoMotion can be used in urban environments, on roads, highways, parking lots, public transportation, and more.",
    "how can i join ecomotion": "You can join EcoMotion by signing up on our website and becoming part of the change towards a greener future.",
    "what is the cost of ecomotion": "The cost varies depending on the implementation scale. Contact us for a detailed quote.",
    "is ecomotion available in my region": "EcoMotion is expanding rapidly. Please provide your location, and we'll check for availability.",
    "do you offer training": "Yes, we offer training and certification for the installation and maintenance of EcoMotion systems.",
    "how much energy can ecomotion generate": "The energy generated depends on the amount of vehicle traffic and specific setup. We can provide detailed estimates based on your requirements.",
    "why should i choose ecomotion": "Choosing EcoMotion helps reduce your carbon footprint, supports sustainable urban development, and offers efficient energy solutions.",
    "how do i contact support": "You can contact support via email at support@ecomotion.com or call us at +971 55 123 4567.",
    "what is your mission": "Our mission is to create sustainable and clean energy solutions to support urban development and reduce environmental impact.",
    "how can i track my energy contributions": "You can track your energy contributions using our EcoMotion app, available for download on our website.",
    "what is kinetic energy": "Kinetic energy is the energy possessed by an object due to its motion. EcoMotion harnesses this energy from moving vehicles.",
    "can i install ecomotion at home": "EcoMotion is primarily designed for urban and public infrastructure, but we can explore home solutions based on your needs.",
    "what is the environmental impact": "EcoMotion helps reduce greenhouse gas emissions by generating clean energy from vehicle motion, contributing to environmental conservation.",
    "what is your website": "Our website is www.ecomotion.com. You can find detailed information and sign up there.",
    "can i volunteer with ecomotion": "Yes, we welcome volunteers. Please visit the 'Join Us' section on our website to learn more.",
    "how can i reduce my carbon footprint": "You can reduce your carbon footprint by using clean energy solutions, reducing waste, recycling, and supporting sustainable projects like EcoMotion.",
    "what is sustainability": "Sustainability means meeting our own needs without compromising the ability of future generations to meet their own needs. It includes renewable energy, reducing waste, and conserving resources.",
    "how does ecomotion benefit the environment": "EcoMotion reduces greenhouse gas emissions, promotes clean energy, and supports sustainable urban development.",
    "do you have any partnerships": "Yes, we have partnerships with various universities, environmental organizations, and local governments.",
    "what is clean energy": "Clean energy is energy generated from renewable, zero-emission sources that do not pollute the atmosphere when used. Examples include solar, wind, and kinetic energy.",
    "how can i get involved": "You can get involved by joining our team, volunteering, or supporting our initiatives. Visit our website for more details.",
    "do you have a mobile app": "Yes, we have a user-friendly app that allows you to track your energy generation, consumption, and environmental impact.",
    "how can businesses use ecomotion": "Businesses can use EcoMotion to power their facilities with clean energy, enhance sustainability, and reduce energy costs.",
    "is there a warranty on your products": "Yes, we offer a comprehensive warranty on all EcoMotion products. Please contact us for specific warranty details.",
    "what kind of maintenance is required": "Regular maintenance includes checking and servicing the kinetic energy systems to ensure optimal performance.",
    "how can i stay updated on ecomotion news": "Subscribe to our newsletter on our website to receive the latest updates and news about EcoMotion.",
    "what is your privacy policy": "We value your privacy and protect your personal information. Please visit our website to read our full privacy policy.",
    "do you have customer support": "Yes, our customer support team is available to assist you with any questions or issues. Contact us via email or phone.",
    "where are you located": "We are based in the United Arab Emirates. Visit our website for more details on our office locations.",
    "how do you measure energy savings": "We measure energy savings using our advanced monitoring systems that track energy generation and consumption in real-time.",
    "can i see a demo of ecomotion": "Yes, we offer demos of our technology. Please contact us to schedule a demonstration.",
    "what are your future plans": "Our future plans include expanding our technology, forming new partnerships, and continuing to innovate in the field of clean energy.",
    "do you offer discounts for large orders": "Yes, we offer discounts for bulk orders. Contact our sales team for more information.",
    "how can i provide feedback": "We appreciate your feedback. Please visit our website to fill out a feedback form or contact us directly.",
    "what is kinetic energy harvesting": "Kinetic energy harvesting is the process of capturing and converting kinetic energy from motion into usable electrical energy.",
    "can ecomotion be used in rural areas": "While EcoMotion is designed for urban environments, it can be adapted for use in rural areas with the right infrastructure.",
    "what materials are used in ecomotion devices": "Our devices use high-quality, durable materials designed to withstand various environmental conditions.",
    "how do i sign up for ecomotion": "Visit our website and click on 'Sign Up' to create an account and join our community.",
    "can i customize my ecomotion setup": "Yes, we offer customizable solutions to meet the specific needs of different users and locations.",
    "what are the installation requirements": "Installation requirements vary based on the location and application. Contact us for detailed information and assistance.",
    "how does ecomotion integrate with other systems": "EcoMotion integrates seamlessly with existing energy systems and urban infrastructure, providing a versatile solution for clean energy.",
    "can i invest in ecomotion": "We welcome investment inquiries. Please contact our team for more information on investment opportunities.",
    "what training do you provide": "We provide comprehensive training on the installation, operation, and maintenance of EcoMotion systems."
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector("p");
    const normalizedUserMessage = userMessage.trim().toLowerCase();
    const response = inputResponseMap[normalizedUserMessage] || "Sorry, I am still learning. I can't answer all the questions yet.";
    messageElement.textContent = response;
    chatbox.scrollTo(0, chatbox.scrollHeight);
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Let me think...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
