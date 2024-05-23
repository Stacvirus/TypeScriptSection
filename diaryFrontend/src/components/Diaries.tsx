import { useEffect, useState } from "react";
import { Diary, Entry } from "../types";
import { getAllDiaries, postEntry } from "../services/DiaryServices";
import { AxiosError } from "axios";

const Diaries = () => {
  const [diaryEntries, setDiaryEntries] = useState<Diary[]>([]);
  const [entry, setEntry] = useState<Entry>({
    date: "",
    visibility: "",
    weather: "",
    comment: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getAllDiaries().then((res) => setDiaryEntries(res));
  }, []);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    postEntry(entry)
      .then((res) => setDiaryEntries(diaryEntries.concat(res)))
      .catch((error) => {
        const err = error as AxiosError;
        setErrorMsg(err.response?.data as string);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });

    setEntry({ date: "", visibility: "", weather: "", comment: "" });
  }

  return (
    <div>
      <h1>Add new entry</h1>
      <p style={{ color: "red" }}>{errorMsg}</p>
      <form onSubmit={handleSubmit}>
        date:{" "}
        <input
          type='date'
          value={entry.date}
          onChange={({ target }) => setEntry({ ...entry, date: target.value })}
        />
        <br />
        <div>
          visibility: great
          <input
            type='radio'
            name='visibility'
            onChange={() => setEntry({ ...entry, visibility: "great" })}
          />
          good
          <input
            type='radio'
            name='visibility'
            onChange={() => setEntry({ ...entry, visibility: "good" })}
          />
          ok
          <input
            type='radio'
            name='visibility'
            onChange={() => setEntry({ ...entry, visibility: "ok" })}
          />
          poor
          <input
            type='radio'
            name='visibility'
            onChange={() => setEntry({ ...entry, visibility: "poor" })}
          />
        </div>
        <div>
          weather sunny
          <input
            type='radio'
            name='weather'
            onChange={() => setEntry({ ...entry, weather: "sunny" })}
          />
          rainy
          <input
            type='radio'
            name='weather'
            onChange={() => setEntry({ ...entry, weather: "rainy" })}
          />
          cloudy
          <input
            type='radio'
            name='weather'
            onChange={() => setEntry({ ...entry, weather: "cloudy" })}
          />
          stormy
          <input
            type='radio'
            name='weather'
            onChange={() => setEntry({ ...entry, weather: "stormy" })}
          />
          windy
          <input
            type='radio'
            name='weather'
            onChange={() => setEntry({ ...entry, weather: "windy" })}
          />
        </div>
        comment:
        <input
          type='text'
          value={entry.comment}
          onChange={({ target }) =>
            setEntry({ ...entry, comment: target.value })
          }
        />
        <br />
        <button type='submit'>add</button>
      </form>

      <h1>Diary entries</h1>
      {diaryEntries.map((d) => (
        <div key={d.id}>
          <h2>{d.date}</h2>
          <p>visibility: {d.visibility}</p>
          <p>weather: {d.weather}</p>
        </div>
      ))}
    </div>
  );
};

export default Diaries;
