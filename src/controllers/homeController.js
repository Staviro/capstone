//modules
import Button from "../components/blocks/button/Button";
import { Link } from "react-router-dom";

const homeController = {
    config: {
        hero: {
            title: <span>Little Lemon<br />Chicago</span>,
            description: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
            callToAction: <Button styles="btn btn-secondary"><Link to="/booking">Reverse a table</Link></Button>
        },
        about: {
            title: <span>About Little Lemon<br />Chicago</span>,
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",    
        }
    }
}

export default homeController;