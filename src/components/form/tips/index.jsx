import styles from "./styles.module.scss";
import Textearea from '@/components/common/input/textarea';
import Input from '@/components/common/input/input';
import Label from '@/components/common/input/label';
import SubmitButton from "@/components/common/input/submit";
import { useEffect, useState } from "react";


export const Tips = ({
    setTips,
    updateStep,
}) => {

    const [form, setForm] = useState({
        hydration_guide: "",
        sunlight: "",
        temperature: "",
    });

    const updateForm = (value, key) => {
        setForm({
            ...form,
            [key]: value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        setTips(form);
        updateStep((prev) => prev + 1);
    };
    
	return (
		<form className={styles.tips} onSubmit={submitForm}>
			<Label labelFor="hydration_guide">
                Water geven
				<Textearea id="hydration_guide" placeholder="Water geven" updateForm={updateForm} />
			</Label>

			<Label labelFor="sunlight">
                Zonlicht
				<Textearea id="sunlight" placeholder="Zonlicht" updateForm={updateForm} />
			</Label>

			<Label labelFor="temperature">
                Temperatuur
				<Textearea id="temperature" placeholder="Temperatuur" updateForm={updateForm} />
			</Label>

			<SubmitButton id="tips" label="Doorgaan" />
		</form>
	)
}