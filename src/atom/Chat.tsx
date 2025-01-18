import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { SystemChat } from "./SystemChat";
import { UserChat } from "./UserChat";
import { Loading, Text, Box } from "@yamada-ui/react";

export type Item = {
  user: string,
  system: string,
  type: string
}

export const Chat = () => {
  const [item, setItem] = useState<Item>({ user: "", system: "", type: "" });
  const [loading, setLoading] = useState<boolean>(true);

  // クエリパラメータを解析
  const searchParams = new URLSearchParams(window.location.search);
  // 必要なパラメータを取得
  const docID = searchParams.get("id") ?? "";

  const fetchData = async () => {
    console.log(docID);
    try {
      const docRef = doc(db, "users", docID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // ドキュメントデータを返す
        console.log("Document data:", docSnap.data());
        setItem(docSnap.data() as Item);
      } else {
        // ドキュメントが存在しない場合
        console.log("No such document!");
        return;
      }

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

      {
        item.type === 'system' ? (
          <Box>
            <SystemChat name={"みまもりぐるみ"} content={item.system} />
            <UserChat name={"Yamada Taro"} content={item.user} />
          </Box>
        ) : item.type === 'user' ? (
          <Box>
            <UserChat name={"Yamada Taro"} content={item.user} />
            <SystemChat name={"みまもりぐるみ"} content={item.system} />
          </Box>
        )
          : <Text>データが見つかりませんでした。</Text>
      }
    </>
  );
};