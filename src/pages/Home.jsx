import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


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