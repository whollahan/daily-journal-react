import { useState } from "react"
import { useHistory } from "react-router-dom"

export const NoteForm = () => {
    const history = useHistory()
    const [note, change] = useState({
        date: "",
        concept: "",
        entry: "",
        mood: "",
        sleep: "",
        wake: "",
        hrs: "",
        exercise: ""
    })

    const makeTicket = (event) => {
        event.preventDefault()
        const newTicket = {
            date: note.date,
            concept: note.concept,
            entry: note.entry,
            mood: note.mood,
            sleep: note.sleep,
            wake: note.wake,
            hrs: note.hrs,
            exercise: note.exercise
        }

        const uploadNote = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/entries", uploadNote)
            .then(() => {
                window.location.reload(false);
            })
    }

    return (
        <form className="outerForm">
            <h2>Create a new note</h2>
            <fieldset>
                <div className="form">
                    <label htmlFor="date">Date:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.date = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Current Date"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="concept">Concept:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.concept = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Concept Learned"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="entry">Entry:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.entry = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Entry"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="mood">Mood:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.mood = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="radio"
                        className="form-control"
                        name="Mood"
                        label="Happy"
                        value="Happy"
                        />
                        Happy
                        <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.mood = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="radio"
                        className="form-control"
                        name="Mood"
                        label="Tired"
                        value="Tired"
                        />
                        Tired
                        <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.mood = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="radio"
                        className="form-control"
                        name="Mood"
                        label="Frustrated"
                        value="Frustrated"
                        />
                        Frustrated
                        <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.mood = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="radio"
                        className="form-control"
                        name="Mood"
                        label="Excited"
                        value="Excited"
                        />
                        Excited
                        <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.mood = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="radio"
                        className="form-control"
                        name="Mood"
                        label="Bad"
                        value="Bad"
                        />
                        Bad
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="date">When I slept:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.sleep = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="When I fell asleep"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="date">When I woke up:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.wake = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="When I woke up"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="date">Hrs Slept:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.hrs = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How long I slept"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form">
                    <label htmlFor="date">Exercise:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...note}
                                copy.exercise = event.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How long I worked out"
                        />
                </div>
            </fieldset>
            <button onClick={makeTicket} className="btn btn-primary">
                Post note
            </button>
        </form>
    )
}