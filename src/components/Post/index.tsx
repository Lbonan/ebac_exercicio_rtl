import styles from "./Post.module.css";

import PostComments from "../PostComments";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  imageUrl: string;
};

const Post = ({ children, imageUrl }: Props) => (
  <div className={styles.post}>
    <img className={styles["post-image"]} src={imageUrl} alt="miniatura do Batmóvel" />
    <p className={styles["post-text"]}> {children} </p>
    <PostComments data-testid="post-comments" />
  </div>
);

export default Post;
