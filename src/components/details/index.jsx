import Styles from "./styles.module.scss";
import Textearea from '@/components/common/input/textarea';
import Input from '@/components/common/input/input';
import Label from '@/components/common/input/label';


const details = () => {
  return (
    <form>
        <fieldset>
            <Label id="naam"/>
            <Input type="name"/>
        </fieldset>
        <fieldset>
            <Label id="land"/>
            <Input type="name"/>
        </fieldset>
        <fieldset>
            <Label id="giftig"/>
            <Textearea />
        </fieldset>
        <fieldset>
            <Label id="beschrijving"/>
            <Textearea />
        </fieldset>
    </form>
  )
}

export default details