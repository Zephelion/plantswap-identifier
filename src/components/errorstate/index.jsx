import Styles from "./styles.module.scss";

export default function ErrorState() {
  return (
    <div className={Styles.error}>
      <img src="/icons/error.svg"></img>
      <h2>Oeps, er is iets mis gegaan</h2>
      <p>We kunnen helaas geen planten vinden in onze database.</p>
      <button>Opnieuw proberen</button>
    </div>
  );
}
