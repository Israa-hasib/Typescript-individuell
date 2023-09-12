type PostCategory = "THREAD" | "QNA";

interface PostData {
  id: number;
  title: string;
  price: string;
  category: PostCategory;
  creationDate: string;
  description: string;
  creator: User;
}

interface QNAPost extends PostData {
  category: "QNA";
  isAnswered: boolean;
  commentAnswerId?: number;
}
