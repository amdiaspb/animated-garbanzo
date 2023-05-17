import { useContext } from "react";
import { styled } from "styled-components";
import { UserContext } from "./UserContext";
import deleteIcon from "../assets/delete-icon.png"
import editIcon from "../assets/edit-icon.png"
import dayjs from "dayjs";

export function Post({ data, setDeleteModal, setEditModal }) {
  const { id, title, username, created_datetime, content } = data;
  const { name } = useContext(UserContext);

  function timeDiff() {
    let diff = dayjs().diff(dayjs(created_datetime), 'minute');
    if (diff < 60) return (diff + " minutes ago");

    diff = dayjs().diff(dayjs(created_datetime), 'hour');
    if (diff < 24) return (diff + " hours ago");

    diff = dayjs().diff(dayjs(created_datetime), 'day');
    return (diff + " days ago");
  }

  return (
    <PostStyle>
      <header>
        <h2>{title}</h2>
        {username === name && 
          <div>
            <img src={deleteIcon} alt="Delete" onClick={() => setDeleteModal({ id })}/>
            <img src={editIcon} alt="Edit" onClick={() => setEditModal({ id, title, content })}/>
          </div>
        }
      </header>
      
      <h3><span>@{username}</span> <time>{timeDiff()}</time></h3>
      <p>{content}</p>
    </PostStyle>
  );
}

export const PostStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border-mid);
  margin: 0 1.5rem;
  overflow: hidden;
  padding-bottom: 1.5rem;

  > * {
    padding: 0 1.5rem;
  }

  header {
    position: relative;
    font-size: 1.33em;
    font-weight: 600;
    padding: 1.5rem;
    padding-right: 8rem;
    background-color: var(--primary);
    color: white;

    h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 1.2em;
      margin-bottom: -0.2em;
    }

    div {
      position: absolute;
      top: 50%;
      right: 1.5rem;
      transform: translateY(-50%);
      display: flex;
      gap: 1em;

      img {
        cursor: pointer;
        border-radius: 50%;

        &:hover {
          background-color: rgba(0, 0, 0, 0.25);
          box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  h3 {
    display: flex;
    justify-content: space-between;
    color: var(--border);
    margin-bottom: -0.5em;
    
    span {
      font-weight: bold;
      max-width: 66%;
      height: 1.2em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  p {
    line-height: 1.33em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
