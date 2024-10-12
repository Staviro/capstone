//components
import Hero from "../blocks/hero/Hero";
import Specials from "../blocks/specials/Specials";
import Testimonials from "../blocks/testimonials/Testimonials";

//controllers
import specialsController from "../../controllers/specialsController";
import testimonialsController from "../../controllers/testimonialsController";
import homeController from "../../controllers/homeController";

const HomePage = function() {
    return (
        <>
            <Hero {...homeController.config.hero} />
            <Specials config={specialsController.config.section} data={specialsController.specials}></Specials>
            <Testimonials data={testimonialsController.tesitmonials}></Testimonials>
            <Hero {...homeController.config.about} />
        </>
    )
}

export default HomePage;