import Styles from "./styles.module.scss";
import Textearea from '@/components/common/input/textarea';
import Input from '@/components/common/input/input';
import Label from '@/components/common/input/label';


const tips = () => {
  return (
    <form>
        <fieldset>
            <Label id="watergeven"/>
            <Textearea />
        </fieldset>
        <fieldset>
            <Label id="zonlicht"/>
            <Textearea />
        </fieldset>
        <fieldset>
            <Label id="temperatuur"/>
            <Textearea />
        </fieldset>
    </form>
  )
}

export default tips