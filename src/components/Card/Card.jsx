import Link from "next/link";
import styles from "./card.module.css";
import dayjs from "dayjs";
import Image from "next/image";

export const Card = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={blog.photo_url} fill={true} />
      </div>
      <p className={styles.title}> {blog.title} </p>
      <p className={styles.subtitle}> {blog.category} </p>
      <div className={styles.footer}>
        <Link href={`/article/${blog.id}`}>Read Article</Link>
        <span> {dayjs(blog.created_at).format("YYYY MMMM d")} </span>
      </div>
    </div>
  );
};
