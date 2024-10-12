const specialsController = {
    specials: [
        {
            id: 1,
            name: "Greek Salad",
            price: "$12.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: require("../assets/images/taylor-kiser-EvoIiaIVRzU-unsplash.jpg")
        },
        {
            id: 2,
            name: "Steak",
            price: "$22.99",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            image: require("../assets/images/alex-munsell-auIbTAcSH6E-unsplash.jpg")
        },
        {
            id: 3,
            name: "Desert",
            price: "$9.99",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: require("../assets/images/brooke-lark-BepcnEnnoPs-unsplash.jpg")
        },
    ],
    config: {
        section: {
            title: "This weeks specials"
        }
    }
}

export default specialsController;