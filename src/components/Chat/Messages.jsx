import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firabase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  const [date, setDate] = useState();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  useEffect(() => {
    if (messages.length) {
      setDate(messages[0].date.toDate());
    }
  }, [messages]);

  return (
    <div className="messages">
      <p className="messagesDate">{date && date.toLocaleDateString()}</p>
      {data.chatId !== "null" ? (
        messages.map((m, i) => (
          <div key={m.id}>
            {i !== 0 &&
              m.date.toDate().getDate() !==
                messages[i - 1].date.toDate().getDate() && (
                <p className="messagesDate">
                  {m.date.toDate().toLocaleDateString()}
                </p>
              )}
            <Message message={m} />
          </div>
        ))
      ) : (
        <div className="notChat">Выберите чат</div>
      )}
    </div>
  );
};

export default Messages;
