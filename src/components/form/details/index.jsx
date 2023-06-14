import styles from "./styles.module.scss";
import Textearea from '@/components/common/input/textarea';
import Input from '@/components/common/input/input';
import Label from '@/components/common/input/label';
import Button from '@/components/common/button/button';


export const Details = () => {
  return (
    <form className={styles.details}>
        <Label labelFor="name" >Naam
        <Input type="name" id="name" placeholder="Naam"/>
        </Label>

        <Label labelFor="land" >Land van herkomst
        <Input type="name" id="land" placeholder="Land"/>
        </Label>

        <Label labelFor="giftig" >Giftigheid
        <Input type="name" id="giftig" placeholder="Giftigheid"/>
        </Label>

        <Label labelFor="beschrijving" >Beschrijving
        <Textearea id="beschrijving" placeholder="Beschrijving"/>
        </Label>

        <Button buttonId="details"/>
    </form>
  )
}