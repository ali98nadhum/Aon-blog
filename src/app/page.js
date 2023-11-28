"use client";

import { Container } from "@/components/container/Container";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Card } from "@/components/Card/Card";
import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { Loader } from "@/components/loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // For get all blogs
  const [blog, setBlog] = useState([]);

  const getBlog = () => {
    setLoading(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.blogs);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {loading && <Loader />}
        <div className={styles.grid}>
          {blog.map((item, index) => (
            <Card key={index} blog={item} />
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
