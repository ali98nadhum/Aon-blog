
import Link from 'next/link'
import { Container } from '../container/Container'
import styles from './footer.module.css'
import { FaSquareFacebook  , FaXTwitter} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




export const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.content}>
                <h3>All Rights Reserved - Aon2023</h3>
                <ul>
                    <li>
                        <Link href={"#"}><FaSquareFacebook/></Link>
                    </li>
                    <li>
                        <Link href={"#"}> <FaInstagramSquare/> </Link>
                    </li>
                    <li>
                        <Link href={"#"}> <FaXTwitter/> </Link>
                    </li>
                </ul>
            </div>
        </Container>
    </div>
  )
}
