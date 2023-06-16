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
    console.log("identifiedPlant", identifiedPlant);
    const [form, setForm] = useState({
		name: "",
		latin_name: "",
		origin: "",
		poisonous: "",
		description: "",
	});

	const updateForm = (value, key) => {
		setForm({
			...form,
			[key]: value,
		});
	};

    useEffect(() => {
        console.log("identifiedPlant", identifiedPlant);
        if (identifiedPlant.score) {
            setForm({
                name: identifiedPlant?.species.commonNames[0],
                latin_name: identifiedPlant?.species.scientificNameWithoutAuthor,  
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
			<Label labelFor="name">
				Naam
				<Input type="name" id="name" placeholder="Naam" updateForm={updateForm} value={form.name} />
			</Label>

			<Label labelFor="latin_name">
				Latijnse Naam
				<Input type="name" id="latin_name" placeholder="Latijnse naam" updateForm={updateForm} value={form.latin_name} />
			</Label>

			<Label labelFor="origin">
				Land van herkomst
				<Input type="name" id="origin" placeholder="Land" updateForm={updateForm} />
			</Label>

			<Label labelFor="poisonous">
				Giftigheid
				<Input type="name" id="poisonous" placeholder="Giftigheid" updateForm={updateForm} />
			</Label>

			<Label labelFor="description">
				Beschrijving
				<Textearea id="description" placeholder="Beschrijving" updateForm={updateForm} />
			</Label>

			<SubmitButton id="details" label="Volgende"/>
		</form>
	)
}