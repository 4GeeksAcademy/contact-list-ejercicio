import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

let contactList = [
	{
		id: 1,
		name: "Rafael Vargas",
		direction: "caracas, Venezuela",
		phone: "0416-1234567",
		email: "rafael@gmail.com"
	},
	{
		id: 2,
		name: "Maria Vargas",
		direction: "Caracas, Venezuela",
		phone: "0412-3456789",
		email: "maria24@gmail.com"
	},
	{
		id: 3,
		name: "Jose Vargas",
		direction: "Caracas, Venezuela",
		phone: "0412-9876543",
		email: "lucciano@gmail.com"
	}
];
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/rafael/contacts")
				.then((response) => {
					return response.json()
				 })
				.then((data) => {
					console.log(data)
				})
				.catch(() => { })
	}, [])
	return (
		<div className="text-center mt-5">
			<h1>Agenda</h1>
			<div className="d-flex flex-column align-items-center">

				{
					contactList.map((contact) => {
						return (
							<ContactCard key={contact.id} contact={contact} />
						);
					})
				}



			</div>

		</div>
	);
}; 