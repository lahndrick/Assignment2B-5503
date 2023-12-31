import { FormEvent, useState } from "react";
import formStyles from "../../../styles/Form.module.scss";
import axios from "axios";
import router from "next/router";

const NewDiscussion = () => {
    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState<string[]>([]);
    const [source, setSource] = useState("");
    const [pubYear, setPubYear] = useState<number>(0);
    const [doi, setDoi] = useState("");
    const [summary, setSummary] = useState("");
    const [linkedDiscussion, setLinkedDiscussion] = useState("");
    const submitNewArticle = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post("https://speedbackend.vercel.app/article", {
                title,
                authors,
                source,
                publicationYear: pubYear,
                doi,
                summary,
                linkedDiscussion,
            });
            console.log("Article created successfully:", response.data.message);
            // todo: Optionally, you can redirect the user or perform other actions here
            //back to home page
            router.push("/")
        } catch (error) {
            console.error("Error creating article:", error);
            // todo:Handle error, display a message to the user, or perform other actions
        }
    };
    // Some helper methods for the authors array
    const addAuthor = () => {
        setAuthors(authors.concat([""]));
    };
    const removeAuthor = (index: number) => {
        setAuthors(authors.filter((_, i) => i !== index));
    };
    const changeAuthor = (index: number, value: string) => {
        setAuthors(
            authors.map((oldValue, i) => {
                return index === i ? value : oldValue;
            })
        );
    };
    // Return the full form
    return (
        <div className="container">
            <h1>New Article</h1>
            <form className={formStyles.form} onSubmit={submitNewArticle}>
                <label htmlFor="title">Title:</label>
                <input
                    className={formStyles.formItem}
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <label htmlFor="author">Authors:</label>
                {authors.map((author, index) => {
                    return (
                        <div key={`author ${index}`} className={formStyles.arrayItem}>
                            <input
                                type="text"
                                name="author"
                                value={author}
                                onChange={(event) => changeAuthor(index, event.target.value)}
                                className={formStyles.formItem}
                            />
                            <button
                                onClick={() => removeAuthor(index)}
                                className={formStyles.buttonItem}
                                style={{ marginLeft: "3rem" }}
                                type="button"
                            >
                                -
                            </button>
                        </div>
                    );
                })}
                <button
                    onClick={() => addAuthor()}
                    className={formStyles.buttonItem}
                    style={{ marginLeft: "auto" }}
                    type="button"
                >
                    +
                </button>
                <label htmlFor="source">Source:</label>
                <input
                    className={formStyles.formItem}
                    type="text"
                    name="source"
                    id="source"
                    value={source}
                    onChange={(event) => {
                        setSource(event.target.value);
                    }}
                />
                <label htmlFor="pubYear">Publication Year:</label>
                <input
                    className={formStyles.formItem}
                    type="number"
                    name="pubYear"
                    id="pubYear"
                    value={pubYear}
                    onChange={(event) => {
                        const val = event.target.value;
                        if (val === "") {
                            setPubYear(0);
                        } else {
                            setPubYear(parseInt(val));
                        }
                    }}
                />
                <label htmlFor="doi">DOI:</label>
                <input
                    className={formStyles.formItem}
                    type="text"
                    name="doi"
                    id="doi"
                    value={doi}
                    onChange={(event) => {
                        setDoi(event.target.value);
                    }}
                />
                <label htmlFor="summary">Summary:</label>
                <textarea
                    className={formStyles.formTextArea}
                    name="summary"
                    value={summary}
                    onChange={(event) => setSummary(event.target.value)}
                />
                <button className={formStyles.formItem} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default NewDiscussion;
