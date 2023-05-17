import { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { Button } from "../components/Button";
import { createPost, deletePost, getPostsData, updatePost } from "../actions/api";
import { InputText } from "../components/InputText";
import { Post } from "../components/Post";
import { useValue } from "../hooks/useValue";
import { UserContext } from "../components/UserContext";
import { ModalForm } from "../components/ModalForm";
import { Textarea } from "../components/Textarea";
import { MdLogout } from 'react-icons/md';
import { PagNav } from "../components/PaginationNav";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const { name, setName } = useContext(UserContext);
  const [posts, setPosts] = useState({});
  const [title, updateTitle, setTitle] = useValue();
  const [content, updateContent, setContent] = useValue();
  const [update, setUpdate] = useState(true);
  const [url, setUrl] = useState("/");
  const navigate = useNavigate();

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editTitle, updateEditTitle, setEditTitle] = useValue();
  const [editContent, updateEditContent, setEditContent] = useValue();

  useEffect(() => {
    setInterval(() => setUpdate(u => !u), 10000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getPostsData(url);
      setPosts(data);
    }
    fetchData();
  }, [update, url]);

  useEffect(() => {
    if (editModal) {
      setEditTitle(editModal.title);
      setEditContent(editModal.content);
    } 
  }, [editModal]);

  async function handlePost(e) {
    e.preventDefault();
    await createPost(name, title, content);
    setTitle("");
    setContent("");
    setUpdate(!update);
  }

  async function editPost(e) {
    e.preventDefault();
    await updatePost(editModal.id, editTitle, editContent);
    setEditTitle("");
    setEditContent("");
    setEditModal(false);
    setUpdate(!update);
  }

  async function removePost(e) {
    e.preventDefault();
    await deletePost(deleteModal.id);
    setDeleteModal(false);
    setUpdate(!update);
  }

  function handleLogout() {
    setName("");
    navigate("/");
  }

  return (
    <MainStyle>

      <ModalForm
        display={deleteModal}
        setDisplay={setDeleteModal}
        title="Are you sure you want to delete this item?"
        confirmText="Delete"
        confirmColor="#FF5151"
        onSubmit={removePost}
      />

      <ModalForm
        display={editModal}
        setDisplay={setEditModal}
        title="Edit item"
        confirmText="Save"
        confirmColor="#47B960"
        onSubmit={editPost}
      >
        <EditContentStyle>
          <InputText name="title" label="Title" placeholder="Hello world!" value={editTitle} onChange={updateEditTitle}/>
          <Textarea name="content" label="Content" placeholder="Content here" value={editContent} onChange={updateEditContent}/>
        </EditContentStyle>
      </ModalForm>

      <header>
        <h1>CodeLeap Network</h1>
        <MdLogout onClick={handleLogout}/>
      </header>
      <main>
        <form onSubmit={handlePost}>
          <h2>What's on your mind?</h2>
          <InputText name="title" label="Title" placeholder="Hello world!" value={title} onChange={updateTitle}/>
          <Textarea name="content" label="Content" placeholder="Content here" value={content} onChange={updateContent}/>
          <Button type="submit" disabled={!title || !content}>Create</Button>
        </form>

        <PagNav posts={posts} setUrl={setUrl}/>

        {posts.results && posts.results.map(p => 
          <Post key={p.id} data={p} setDeleteModal={setDeleteModal} setEditModal={setEditModal}/>
        )}

        <PagNav posts={posts} setUrl={setUrl}/>

      </main>
      
    </MainStyle>
  );
}

export const MainStyle = styled.div`
  width: 100%;
  background-color: white;

  &,
  main > form,
  article
  {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  h1,
  form > h2 {
    font-size: 1.33em;
    font-weight: 600;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    height: 5rem;

    background-color: var(--primary);
    color: white;

    svg {
      cursor: pointer;
      font-size: 30px;
      border-radius: 50%;

      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.25);
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 1.5rem;

    nav {
      display: flex;
      gap: 1rem;
      align-self: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      border-radius: 1em;
      border: 1px solid var(--border-mid);
      padding: 1.5em;
      margin: 1.5em;
      margin-bottom: 0;

      input {
        border-radius: 0.5em;
      }

      button {
        justify-self: flex-end;
      }
    }
  }
`;

const EditContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
