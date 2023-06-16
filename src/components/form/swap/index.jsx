import Image from "next/image";
import styles from "./styles.module.scss";

export const Swap = ({
    formDetails,
    formTips,
    image,
}) => {


    
	return (
        <section>
            <pre>
                {JSON.stringify(formDetails, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(formTips, null, 2)}
            </pre>
            <Image src={image.src} alt="Identified plant" width={200} height={200} />
        </section>
	)
}