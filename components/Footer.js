import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";

import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  GoogleOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.name}>
        <p>Aqsa Faisal</p>
      </div>
      <div className={styles.links}>
        <p className={styles.link}>
          Home | About | Services | Portfolio | Contact
        </p>
      </div>
      <div className={styles.icons}>
        <FacebookOutlined className={styles.icon} />
        <Link
          href="https://www.linkedin.com/in/aqsa-faisal-113b60225/"
          target="_blank"
        >
          <LinkedinOutlined className={styles.icon} />{" "}
        </Link>
        <Link href="mailto:aqsafaisal086@gmail.com" target="_blank">
          <GoogleOutlined className={styles.icon} />
        </Link>
        <Link href="https://github.com/aqsafaisal34/" target="_blank">
          {" "}
          <GithubOutlined className={styles.icon} />{" "}
        </Link>
        <WhatsAppOutlined className={styles.icon} />
      </div>
      <hr />
      <div className={styles.copyright}>
        <p>Copyright@2023 AqsaFaisal | All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
