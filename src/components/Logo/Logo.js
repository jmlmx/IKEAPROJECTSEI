//import styles from the module.scss
import styles from './Logo.module.scss'


//export function to have Project title
export default function Logo() {
    return (
        <div className="animate__animated animate__tada animate__slow animate__infinite">
        <div className={styles.Logo}>
            <div>IKEA</div>
        </div>
        </div>
    );
}
