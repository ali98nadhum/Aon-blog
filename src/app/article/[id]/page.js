import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import dayjs from "dayjs";

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Article({ params }) {
  const data = await getData(params.id);
  return (
    <main>
      <Header />
      <Container>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}> {data.blog.title} </h1>
            <p> {data.blog.category} </p>
          </div>
          <span> {dayjs(data.blog.created_at).format("YYYY MMMM d")} </span>
        </div>

        <div className={styles.banner}>
          <Image src={data.blog.photo_url} fill></Image>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
        ></div>
      </Container>
      <Footer />
    </main>
  );
}
