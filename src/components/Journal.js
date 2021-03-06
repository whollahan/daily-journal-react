import React, { useEffect, useState } from "react"

export const Journal = () => {
    const [notes, setNotes] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/entries")
                .then(res => res.json())
                .then(
                    (entries) => {
                        setNotes(entries)
                    }
                )
        },
        []
    )

    return (
        <>
            <div className="notes">
            <h1>My Daily Journal</h1>
            {
                notes.map(
                    (note) => {
                        return <p key={`note--${note.id}`}>
                            On {note.date}, I learned about {note.concept}.&nbsp;
                            {note.entry}&nbsp;
                            I'm feeling {note.mood}.
                            I went to bed yesterday at {note.sleep} and woke up at {note.wake}&nbsp;
                            I slept for {note.hrs} hours and worked out for {note.exercise} minutes.
                            </p>
                     }
                )
            }
            </div>
        </>
    )
}