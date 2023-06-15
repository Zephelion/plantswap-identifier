import styles from "./styles.module.scss";
import Textearea from '@/components/common/input/textarea';
import Input from '@/components/common/input/input';
import Label from '@/components/common/input/label';
import Button from '@/components/common/button/button';


export const Tips = () => {
  return (
    <form className={styles.tips}>
        <Label labelFor="water" >Water geven
        <Textearea id="water" placeholder="Water geven"/>
        </Label>

        <Label labelFor="zon" >Zonlicht
        <Textearea id="zon" placeholder="Zonlicht"/>
        </Label>

        <Label labelFor="temp" >Temperatuur
        <Textearea id="temp" placeholder="Temperatuur"/>
        </Label>

        <Button buttonId="details"/>
    </form>
  )
}