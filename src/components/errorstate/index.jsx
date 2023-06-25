import Image from "next/image";
import Styles from "./styles.module.scss";

export default function ErrorState({ retry }) {
    return (
        <div className={Styles.error}>
            <Image src="/icons/error.svg" width={160} height={160} alt="Error state icon" />
            <h2>Oeps, er is iets mis gegaan</h2>
            <p>We kunnen helaas geen planten vinden in onze database.</p>
            <button onClick={retry}>
                Opnieuw proberen
            </button>
        </div>
    );
}
