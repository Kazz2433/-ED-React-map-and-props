import React from "react";
import Entry from "./Entry";

export default function CreateEntry(emojiData) {
    return(
        <Entry 
            key={emojiData.id}
            emoji={emojiData.emoji}
            name={emojiData.name}
            meaning={emojiData.meaning}
        />
    )
}