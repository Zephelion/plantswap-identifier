import styles from "./styles.module.scss";
import Textearea from '@/components/common/input/textarea';
import Input from '@/components/common/input/input';
import Label from '@/components/common/input/label';
import { useEffect, useState } from "react";
import SubmitButton from "@/components/common/input/submit";


export const Details = ({
	setDetails,
	updateStep,
    identifiedPlant,
}) => {

    const [form, setForm] = useState({
		naam: "",
		latijnsenaam: "",
		landvanherkomst: "",
		giftig: "",
		beschrijving: "",
	});

	const updateForm = (value, key) => {
		setForm({
			...form,
			[key]: value,
		});
	};

    useEffect(() => {
        
        if (identifiedPlant.score) {
            setForm({
                naam: identifiedPlant?.species.commonNames[0],
                latijnsenaam: identifiedPlant?.species.scientificNameWithoutAuthor,  
            })
        }
    }, [identifiedPlant]);

	const submitForm = (e) => {
		e.preventDefault();
		setDetails(form);
		updateStep((prev) => prev + 1);
	};

	return (
		<form className={styles.details} onSubmit={submitForm}>
			<Label labelFor="naam">
				Naam
				<Input type="name" id="naam" placeholder="Naam" updateForm={updateForm} value={form.naam || ""} />
			</Label>

			<Label labelFor="latijnsenaam">
				Latijnse Naam
				<Input type="name" id="latijnsenaam" placeholder="Latijnse naam" updateForm={updateForm} value={form.latijnsenaam || ""} />
			</Label>

			<Label labelFor="landvanherkomst">
				Land van herkomst
				<Input type="name" id="landvanherkomst" placeholder="Land" updateForm={updateForm} value={form.landvanherkomst || ""} />
			</Label>

			<Label labelFor="giftig">
				Giftigheid
				<Input type="name" id="giftig" placeholder="Giftigheid" updateForm={updateForm} value={form.giftig || ""} />
			</Label>

			<Label labelFor="beschrijving">
				Beschrijving
				<Textearea id="beschrijving" placeholder="Beschrijving" updateForm={updateForm} value={form.beschrijving || ""} />
			</Label>

			<SubmitButton id="details" label="Volgende"/>
		</form>
	)
}