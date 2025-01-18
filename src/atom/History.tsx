import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Loading, Text, Link } from "@yamada-ui/react";

export type DocID = {
  id: string,
}

export const History = () => {
  const [items, setItems] = useState<DocID[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data: DocID[] = querySnapshot.docs.map((doc) => ({
        id: doc.id, // ドキュメントID
      }));
      setItems(data);
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <>
      {loading && <Loading text="5xl" />}

      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <Link key={item.id} href={`?id=${item.id}`}>
              <Text  text="2xl">{item.id}</Text>
            </Link>
          ))}
        </>
      ) : (
        <Text>データが見つかりませんでした。</Text>
      )}
    </>
  );
};