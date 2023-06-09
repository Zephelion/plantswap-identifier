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
                naam: identifiedPlant?.species.commonNames[0] || "",
                latijnsenaam: identifiedPlant?.species.scientificNameWithoutAuthor || "",
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
				<span>Naam {!form.naam.trimStart() && ": Invullen is verplicht!" }</span>
				<Input type="name" id="naam" placeholder="Naam" updateForm={updateForm} value={form.naam.trimStart() || ""} required={true}/>
			</Label>

			<Label labelFor="latijnsenaam">
				<span>Latijnse Naam{!form.latijnsenaam.trimStart() && ": Invullen is verplicht!" }</span>
				<Input type="name" id="latijnsenaam" placeholder="Latijnse naam" updateForm={updateForm} value={form.latijnsenaam.trimStart() || ""} required={true}/>
			</Label>

			<Label labelFor="landvanherkomst">
				<span>Land van herkomst</span>
				<Input type="name" id="landvanherkomst" placeholder="Land" updateForm={updateForm} value={form.landvanherkomst || ""} />
			</Label>

			<Label labelFor="giftig">
				<span>Giftigheid</span>
				<Input type="name" id="giftig" placeholder="Giftigheid" updateForm={updateForm} value={form.giftig || ""} />
			</Label>

			<Label labelFor="beschrijving">
				<span>Beschrijving</span>
				<Textearea id="beschrijving" placeholder="Beschrijving" updateForm={updateForm} value={form.beschrijving || ""} />
			</Label>

			<SubmitButton id="details" label="Doorgaan" disabled={!form.naam.trimStart() || !form.latijnsenaam.trimStart()} />
		</form>
	)
}