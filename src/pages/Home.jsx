import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Agenda</h1>
			<div className= "d-flex flex-column align-items-center">

				
				<ContactCard/>
				<ContactCard/>
				<ContactCard/>
				<ContactCard/>

			</div>

		</div>
	);
}; 