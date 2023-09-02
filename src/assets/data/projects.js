const projects = [
    {
        title: "Green Grocery",
        category: "Frontend Development",
        tools: ["React", "Redux", "HTML/CSS", "Bootstrap"],
        overview:
            "Green Grocery is a full-fledged e-commerce web application built using React and Redux. It allows users to create accounts, browse a wide variety of grocery products, add items to their cart, and complete secure transactions. The project includes features like user authentication, dynamic product listing, and integration with a payment gateway.",
        images: [
            "./images/green_grocery_1.jpg",
            "./images/green_grocery_2.jpg",
            "./images/green_grocery_3.jpg",
            "./images/green_grocery_4.jpg",
        ],
        description: `
     Green Grocery is an online grocery store where users can browse and purchase fresh produce and groceries. The app offers a user-friendly interface, product recommendations, and secure payment processing.
      `,
        challenges: [
            "Implementing a responsive design for various screen sizes.",
            "Managing complex state using Redux for a seamless shopping experience.",
            "Ensuring secure and smooth payment processing."],

        features: [
            "Real-time product recommendations based on user preferences.",
            "User-friendly cart management with dynamic updates.",
        ],
    },
    {
        title: "E-commerce Dashboard",
        category: "UI/UX Design",
        tools: ["Figma", "Sketch", "Adobe XD"],
        overview:
            "The E-commerce Dashboard is a UI/UX design project aimed at simplifying the management of an online store. It provides store owners with a clear and visually appealing interface to monitor sales, track inventory, and analyze customer data.",
        images: [
            "./images/ecommerce_dashboard_1.jpg",
            "./images/ecommerce_dashboard_2.jpg",
            "./images/ecommerce_dashboard_3.jpg",
            "./images/ecommerce_dashboard_4.jpg",
        ],
        description: `
        The E - commerce Dashboard is a user interface design project focused on creating an intuitive and visually appealing dashboard for online store owners.It provides essential data insights and analytics.
      `,
        challenges: [
            "  Creating a responsive and user-friendly dashboard layout.",
            "Ensuring data visualization that is both informative and easy to understand.",
            "Maintaining consistency in design elements for a cohesive user experience."],

        features: [
            "Interactive charts and graphs for sales analytics.",
            "A color-coded inventory management system.",
        ],
    },

];

export default projects;
