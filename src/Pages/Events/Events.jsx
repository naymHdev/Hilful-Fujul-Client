import useEvents from "../../Hooks/useEvents";
import EventCard from "./EventCard";


const Events = () => {

    const [isEvents] = useEvents()
    // console.log(isEvents);

    return (
        <>
            <p>events</p>
            <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    isEvents?.map(item => <EventCard key={item._id} event={item} />)
                }
            </section>
        </>
    );
};

export default Events;